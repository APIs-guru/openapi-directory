package operations



type GetPublicStatusUsingPostQueryParams struct {
    PadID *string `queryParam:"style=form,explode=true,name=padID"`
    
}

type GetPublicStatusUsingPostRequest struct {
    QueryParams GetPublicStatusUsingPostQueryParams 
    
}

type GetPublicStatusUsingPost200ApplicationJSONData struct {
    PublicStatus *bool `json:"publicStatus,omitempty"`
    
}

type GetPublicStatusUsingPost200ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data *GetPublicStatusUsingPost200ApplicationJSONData `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetPublicStatusUsingPost400ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetPublicStatusUsingPost401ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetPublicStatusUsingPost500ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetPublicStatusUsingPostResponse struct {
    ContentType string 
    StatusCode int64 
    GetPublicStatusUsingPost200ApplicationJSONObject *GetPublicStatusUsingPost200ApplicationJSON 
    GetPublicStatusUsingPost400ApplicationJSONObject *GetPublicStatusUsingPost400ApplicationJSON 
    GetPublicStatusUsingPost401ApplicationJSONObject *GetPublicStatusUsingPost401ApplicationJSON 
    GetPublicStatusUsingPost500ApplicationJSONObject *GetPublicStatusUsingPost500ApplicationJSON 
    
}

