package operations



type GetReadOnlyIDUsingPostQueryParams struct {
    PadID *string `queryParam:"style=form,explode=true,name=padID"`
    
}

type GetReadOnlyIDUsingPostRequest struct {
    QueryParams GetReadOnlyIDUsingPostQueryParams 
    
}

type GetReadOnlyIDUsingPost200ApplicationJSONData struct {
    ReadOnlyID *string `json:"readOnlyID,omitempty"`
    
}

type GetReadOnlyIDUsingPost200ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data *GetReadOnlyIDUsingPost200ApplicationJSONData `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetReadOnlyIDUsingPost400ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetReadOnlyIDUsingPost401ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetReadOnlyIDUsingPost500ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetReadOnlyIDUsingPostResponse struct {
    ContentType string 
    StatusCode int64 
    GetReadOnlyIDUsingPost200ApplicationJSONObject *GetReadOnlyIDUsingPost200ApplicationJSON 
    GetReadOnlyIDUsingPost400ApplicationJSONObject *GetReadOnlyIDUsingPost400ApplicationJSON 
    GetReadOnlyIDUsingPost401ApplicationJSONObject *GetReadOnlyIDUsingPost401ApplicationJSON 
    GetReadOnlyIDUsingPost500ApplicationJSONObject *GetReadOnlyIDUsingPost500ApplicationJSON 
    
}

