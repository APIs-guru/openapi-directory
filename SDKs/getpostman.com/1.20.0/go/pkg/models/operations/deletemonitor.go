package operations

type DeleteMonitorPathParams struct {
	MonitorUID string `pathParam:"style=simple,explode=false,name=monitor_uid"`
}

type DeleteMonitor200ApplicationJSONMonitor struct {
	ID  *string `json:"id,omitempty"`
	UID *string `json:"uid,omitempty"`
}

type DeleteMonitor200ApplicationJSON struct {
	Monitor *DeleteMonitor200ApplicationJSONMonitor `json:"monitor,omitempty"`
}

type DeleteMonitor404ApplicationJSONError struct {
	Message *string `json:"message,omitempty"`
	Name    *string `json:"name,omitempty"`
}

type DeleteMonitor404ApplicationJSON struct {
	Error *DeleteMonitor404ApplicationJSONError `json:"error,omitempty"`
}

type DeleteMonitorRequest struct {
	PathParams DeleteMonitorPathParams
}

type DeleteMonitorResponse struct {
	ContentType                           string
	StatusCode                            int64
	DeleteMonitor200ApplicationJSONObject *DeleteMonitor200ApplicationJSON
	DeleteMonitor404ApplicationJSONObject *DeleteMonitor404ApplicationJSON
}
