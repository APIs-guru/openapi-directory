package operations



type DeleteSessionUsingPostQueryParams struct {
    SessionID *string `queryParam:"style=form,explode=true,name=sessionID"`
    
}

type DeleteSessionUsingPostRequest struct {
    QueryParams DeleteSessionUsingPostQueryParams 
    
}

type DeleteSessionUsingPost200ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type DeleteSessionUsingPost400ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type DeleteSessionUsingPost401ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type DeleteSessionUsingPost500ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type DeleteSessionUsingPostResponse struct {
    ContentType string 
    StatusCode int64 
    DeleteSessionUsingPost200ApplicationJSONObject *DeleteSessionUsingPost200ApplicationJSON 
    DeleteSessionUsingPost400ApplicationJSONObject *DeleteSessionUsingPost400ApplicationJSON 
    DeleteSessionUsingPost401ApplicationJSONObject *DeleteSessionUsingPost401ApplicationJSON 
    DeleteSessionUsingPost500ApplicationJSONObject *DeleteSessionUsingPost500ApplicationJSON 
    
}

