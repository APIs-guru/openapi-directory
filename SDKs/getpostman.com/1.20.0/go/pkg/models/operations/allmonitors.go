package operations



type AllMonitors200ApplicationJSONMonitors struct {
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    Owner *string `json:"owner,omitempty"`
    UID *string `json:"uid,omitempty"`
    
}

type AllMonitors200ApplicationJSON struct {
    Monitors []AllMonitors200ApplicationJSONMonitors `json:"monitors,omitempty"`
    
}

type AllMonitorsResponse struct {
    ContentType string 
    StatusCode int64 
    AllMonitors200ApplicationJSONObject *AllMonitors200ApplicationJSON 
    
}

