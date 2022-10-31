package operations



type AllMocks200ApplicationJSONMocks struct {
    Collection *string `json:"collection,omitempty"`
    Environment *string `json:"environment,omitempty"`
    ID *string `json:"id,omitempty"`
    MockURL *string `json:"mockUrl,omitempty"`
    Owner *string `json:"owner,omitempty"`
    UID *string `json:"uid,omitempty"`
    
}

type AllMocks200ApplicationJSON struct {
    Mocks []AllMocks200ApplicationJSONMocks `json:"mocks,omitempty"`
    
}

type AllMocksResponse struct {
    ContentType string 
    StatusCode int64 
    AllMocks200ApplicationJSONObject *AllMocks200ApplicationJSON 
    
}

