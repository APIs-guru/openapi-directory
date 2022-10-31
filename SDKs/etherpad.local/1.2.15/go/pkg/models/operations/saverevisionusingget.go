package operations



type SaveRevisionUsingGetQueryParams struct {
    PadID *string `queryParam:"style=form,explode=true,name=padID"`
    Rev *string `queryParam:"style=form,explode=true,name=rev"`
    
}

type SaveRevisionUsingGetRequest struct {
    QueryParams SaveRevisionUsingGetQueryParams 
    
}

type SaveRevisionUsingGet200ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type SaveRevisionUsingGet400ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type SaveRevisionUsingGet401ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type SaveRevisionUsingGet500ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type SaveRevisionUsingGetResponse struct {
    ContentType string 
    StatusCode int64 
    SaveRevisionUsingGet200ApplicationJSONObject *SaveRevisionUsingGet200ApplicationJSON 
    SaveRevisionUsingGet400ApplicationJSONObject *SaveRevisionUsingGet400ApplicationJSON 
    SaveRevisionUsingGet401ApplicationJSONObject *SaveRevisionUsingGet401ApplicationJSON 
    SaveRevisionUsingGet500ApplicationJSONObject *SaveRevisionUsingGet500ApplicationJSON 
    
}

