package operations

type UpdateMonitorPathParams struct {
	MonitorUID string `pathParam:"style=simple,explode=false,name=monitor_uid"`
}

type UpdateMonitorRequestBodyMonitorSchedule struct {
	Cron     *string `json:"cron,omitempty"`
	Timezone *string `json:"timezone,omitempty"`
}

type UpdateMonitorRequestBodyMonitor struct {
	Name     *string                                  `json:"name,omitempty"`
	Schedule *UpdateMonitorRequestBodyMonitorSchedule `json:"schedule,omitempty"`
}

type UpdateMonitorRequestBody struct {
	Monitor *UpdateMonitorRequestBodyMonitor `json:"monitor,omitempty"`
}

type UpdateMonitor200ApplicationJSONMonitor struct {
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	UID  *string `json:"uid,omitempty"`
}

type UpdateMonitor200ApplicationJSON struct {
	Monitor *UpdateMonitor200ApplicationJSONMonitor `json:"monitor,omitempty"`
}

type UpdateMonitorRequest struct {
	PathParams UpdateMonitorPathParams
	Request    *UpdateMonitorRequestBody `request:"mediaType=application/json"`
}

type UpdateMonitorResponse struct {
	ContentType                           string
	StatusCode                            int64
	UpdateMonitor200ApplicationJSONObject *UpdateMonitor200ApplicationJSON
}
