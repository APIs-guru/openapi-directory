package operations



type CheckTokenUsingPost200ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type CheckTokenUsingPost400ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type CheckTokenUsingPost401ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type CheckTokenUsingPost500ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type CheckTokenUsingPostResponse struct {
    ContentType string 
    StatusCode int64 
    CheckTokenUsingPost200ApplicationJSONObject *CheckTokenUsingPost200ApplicationJSON 
    CheckTokenUsingPost400ApplicationJSONObject *CheckTokenUsingPost400ApplicationJSON 
    CheckTokenUsingPost401ApplicationJSONObject *CheckTokenUsingPost401ApplicationJSON 
    CheckTokenUsingPost500ApplicationJSONObject *CheckTokenUsingPost500ApplicationJSON 
    
}

