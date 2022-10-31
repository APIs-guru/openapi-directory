package operations



type SetTextUsingGetQueryParams struct {
    PadID *string `queryParam:"style=form,explode=true,name=padID"`
    Text *string `queryParam:"style=form,explode=true,name=text"`
    
}

type SetTextUsingGetRequest struct {
    QueryParams SetTextUsingGetQueryParams 
    
}

type SetTextUsingGet200ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type SetTextUsingGet400ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type SetTextUsingGet401ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type SetTextUsingGet500ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type SetTextUsingGetResponse struct {
    ContentType string 
    StatusCode int64 
    SetTextUsingGet200ApplicationJSONObject *SetTextUsingGet200ApplicationJSON 
    SetTextUsingGet400ApplicationJSONObject *SetTextUsingGet400ApplicationJSON 
    SetTextUsingGet401ApplicationJSONObject *SetTextUsingGet401ApplicationJSON 
    SetTextUsingGet500ApplicationJSONObject *SetTextUsingGet500ApplicationJSON 
    
}

