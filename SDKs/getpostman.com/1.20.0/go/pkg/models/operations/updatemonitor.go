package operations

type UpdateMonitorPathParams struct {
	MonitorUID string `pathParam:"style=simple,explode=false,name=monitor_uid"`
}

type UpdateMonitorRequestBodyMonitorSchedule struct {
	Cron     *string `json:"cron"`
	Timezone *string `json:"timezone"`
}

type UpdateMonitorRequestBodyMonitor struct {
	Name     *string                                  `json:"name"`
	Schedule *UpdateMonitorRequestBodyMonitorSchedule `json:"schedule"`
}

type UpdateMonitorRequestBody struct {
	Monitor *UpdateMonitorRequestBodyMonitor `json:"monitor"`
}

type UpdateMonitorRequest struct {
	PathParams UpdateMonitorPathParams
	Request    *UpdateMonitorRequestBody `request:"mediaType=application/json"`
}

type UpdateMonitor200ApplicationJSONMonitor struct {
	ID   *string `json:"id"`
	Name *string `json:"name"`
	UID  *string `json:"uid"`
}

type UpdateMonitor200ApplicationJSON struct {
	Monitor *UpdateMonitor200ApplicationJSONMonitor `json:"monitor"`
}

type UpdateMonitorResponse struct {
	ContentType                           string
	StatusCode                            int64
	UpdateMonitor200ApplicationJSONObject *UpdateMonitor200ApplicationJSON
}
