package operations



type ListAllPadsUsingPost200ApplicationJSONData struct {
    PadIDs []string `json:"padIDs,omitempty"`
    
}

type ListAllPadsUsingPost200ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data *ListAllPadsUsingPost200ApplicationJSONData `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type ListAllPadsUsingPost400ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type ListAllPadsUsingPost401ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type ListAllPadsUsingPost500ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type ListAllPadsUsingPostResponse struct {
    ContentType string 
    StatusCode int64 
    ListAllPadsUsingPost200ApplicationJSONObject *ListAllPadsUsingPost200ApplicationJSON 
    ListAllPadsUsingPost400ApplicationJSONObject *ListAllPadsUsingPost400ApplicationJSON 
    ListAllPadsUsingPost401ApplicationJSONObject *ListAllPadsUsingPost401ApplicationJSON 
    ListAllPadsUsingPost500ApplicationJSONObject *ListAllPadsUsingPost500ApplicationJSON 
    
}

