package operations



type GetSavedRevisionsCountUsingPostQueryParams struct {
    PadID *string `queryParam:"style=form,explode=true,name=padID"`
    
}

type GetSavedRevisionsCountUsingPostRequest struct {
    QueryParams GetSavedRevisionsCountUsingPostQueryParams 
    
}

type GetSavedRevisionsCountUsingPost200ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetSavedRevisionsCountUsingPost400ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetSavedRevisionsCountUsingPost401ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetSavedRevisionsCountUsingPost500ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetSavedRevisionsCountUsingPostResponse struct {
    ContentType string 
    StatusCode int64 
    GetSavedRevisionsCountUsingPost200ApplicationJSONObject *GetSavedRevisionsCountUsingPost200ApplicationJSON 
    GetSavedRevisionsCountUsingPost400ApplicationJSONObject *GetSavedRevisionsCountUsingPost400ApplicationJSON 
    GetSavedRevisionsCountUsingPost401ApplicationJSONObject *GetSavedRevisionsCountUsingPost401ApplicationJSON 
    GetSavedRevisionsCountUsingPost500ApplicationJSONObject *GetSavedRevisionsCountUsingPost500ApplicationJSON 
    
}

