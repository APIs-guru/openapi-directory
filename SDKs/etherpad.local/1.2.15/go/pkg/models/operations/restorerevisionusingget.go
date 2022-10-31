package operations



type RestoreRevisionUsingGetQueryParams struct {
    PadID *string `queryParam:"style=form,explode=true,name=padID"`
    Rev *string `queryParam:"style=form,explode=true,name=rev"`
    
}

type RestoreRevisionUsingGetRequest struct {
    QueryParams RestoreRevisionUsingGetQueryParams 
    
}

type RestoreRevisionUsingGet200ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type RestoreRevisionUsingGet400ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type RestoreRevisionUsingGet401ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type RestoreRevisionUsingGet500ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type RestoreRevisionUsingGetResponse struct {
    ContentType string 
    StatusCode int64 
    RestoreRevisionUsingGet200ApplicationJSONObject *RestoreRevisionUsingGet200ApplicationJSON 
    RestoreRevisionUsingGet400ApplicationJSONObject *RestoreRevisionUsingGet400ApplicationJSON 
    RestoreRevisionUsingGet401ApplicationJSONObject *RestoreRevisionUsingGet401ApplicationJSON 
    RestoreRevisionUsingGet500ApplicationJSONObject *RestoreRevisionUsingGet500ApplicationJSON 
    
}

