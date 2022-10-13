package operations

type AllMonitors200ApplicationJSONMonitors struct {
	ID    *string `json:"id"`
	Name  *string `json:"name"`
	Owner *string `json:"owner"`
	UID   *string `json:"uid"`
}

type AllMonitors200ApplicationJSON struct {
	Monitors []AllMonitors200ApplicationJSONMonitors `json:"monitors"`
}

type AllMonitorsResponse struct {
	ContentType                         string
	StatusCode                          int64
	AllMonitors200ApplicationJSONObject *AllMonitors200ApplicationJSON
}
