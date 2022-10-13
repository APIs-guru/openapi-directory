package operations

type CreateMonitorRequestBodyMonitorSchedule struct {
	Cron     *string `json:"cron"`
	Timezone *string `json:"timezone"`
}

type CreateMonitorRequestBodyMonitor struct {
	Collection  *string                                  `json:"collection"`
	Environment *string                                  `json:"environment"`
	Name        *string                                  `json:"name"`
	Schedule    *CreateMonitorRequestBodyMonitorSchedule `json:"schedule"`
}

type CreateMonitorRequestBody struct {
	Monitor *CreateMonitorRequestBodyMonitor `json:"monitor"`
}

type CreateMonitorRequest struct {
	Request *CreateMonitorRequestBody `request:"mediaType=application/json"`
}

type CreateMonitor200ApplicationJSONMonitor struct {
	ID   *string `json:"id"`
	Name *string `json:"name"`
	UID  *string `json:"uid"`
}

type CreateMonitor200ApplicationJSON struct {
	Monitor *CreateMonitor200ApplicationJSONMonitor `json:"monitor"`
}

type CreateMonitor400ApplicationJSONErrorDetails struct {
	Param *string `json:"param"`
}

type CreateMonitor400ApplicationJSONError struct {
	Details *CreateMonitor400ApplicationJSONErrorDetails `json:"details"`
	Message *string                                      `json:"message"`
	Name    *string                                      `json:"name"`
}

type CreateMonitor400ApplicationJSON struct {
	Error *CreateMonitor400ApplicationJSONError `json:"error"`
}

type CreateMonitorResponse struct {
	ContentType                           string
	StatusCode                            int64
	CreateMonitor200ApplicationJSONObject *CreateMonitor200ApplicationJSON
	CreateMonitor400ApplicationJSONObject *CreateMonitor400ApplicationJSON
}
