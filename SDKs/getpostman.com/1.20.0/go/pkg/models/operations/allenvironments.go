package operations



type AllEnvironments200ApplicationJSONEnvironments struct {
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    Owner *string `json:"owner,omitempty"`
    UID *string `json:"uid,omitempty"`
    
}

type AllEnvironments200ApplicationJSON struct {
    Environments []AllEnvironments200ApplicationJSONEnvironments `json:"environments,omitempty"`
    
}

type AllEnvironmentsResponse struct {
    ContentType string 
    StatusCode int64 
    AllEnvironments200ApplicationJSONObject *AllEnvironments200ApplicationJSON 
    
}

