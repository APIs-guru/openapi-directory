package operations



type GetLastEditedUsingGetQueryParams struct {
    PadID *string `queryParam:"style=form,explode=true,name=padID"`
    
}

type GetLastEditedUsingGetRequest struct {
    QueryParams GetLastEditedUsingGetQueryParams 
    
}

type GetLastEditedUsingGet200ApplicationJSONData struct {
    LastEdited *int64 `json:"lastEdited,omitempty"`
    
}

type GetLastEditedUsingGet200ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data *GetLastEditedUsingGet200ApplicationJSONData `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetLastEditedUsingGet400ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetLastEditedUsingGet401ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetLastEditedUsingGet500ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetLastEditedUsingGetResponse struct {
    ContentType string 
    StatusCode int64 
    GetLastEditedUsingGet200ApplicationJSONObject *GetLastEditedUsingGet200ApplicationJSON 
    GetLastEditedUsingGet400ApplicationJSONObject *GetLastEditedUsingGet400ApplicationJSON 
    GetLastEditedUsingGet401ApplicationJSONObject *GetLastEditedUsingGet401ApplicationJSON 
    GetLastEditedUsingGet500ApplicationJSONObject *GetLastEditedUsingGet500ApplicationJSON 
    
}

