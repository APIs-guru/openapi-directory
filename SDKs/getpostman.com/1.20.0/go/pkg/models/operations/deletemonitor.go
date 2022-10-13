package operations

type DeleteMonitorPathParams struct {
	MonitorUID string `pathParam:"style=simple,explode=false,name=monitor_uid"`
}

type DeleteMonitorRequest struct {
	PathParams DeleteMonitorPathParams
}

type DeleteMonitor200ApplicationJSONMonitor struct {
	ID  *string `json:"id"`
	UID *string `json:"uid"`
}

type DeleteMonitor200ApplicationJSON struct {
	Monitor *DeleteMonitor200ApplicationJSONMonitor `json:"monitor"`
}

type DeleteMonitor404ApplicationJSONError struct {
	Message *string `json:"message"`
	Name    *string `json:"name"`
}

type DeleteMonitor404ApplicationJSON struct {
	Error *DeleteMonitor404ApplicationJSONError `json:"error"`
}

type DeleteMonitorResponse struct {
	ContentType                           string
	StatusCode                            int64
	DeleteMonitor200ApplicationJSONObject *DeleteMonitor200ApplicationJSON
	DeleteMonitor404ApplicationJSONObject *DeleteMonitor404ApplicationJSON
}
