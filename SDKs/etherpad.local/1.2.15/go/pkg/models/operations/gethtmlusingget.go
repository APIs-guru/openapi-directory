package operations



type GetHTMLUsingGetQueryParams struct {
    PadID *string `queryParam:"style=form,explode=true,name=padID"`
    Rev *string `queryParam:"style=form,explode=true,name=rev"`
    
}

type GetHTMLUsingGetRequest struct {
    QueryParams GetHTMLUsingGetQueryParams 
    
}

type GetHTMLUsingGet200ApplicationJSONData struct {
    HTML *string `json:"html,omitempty"`
    
}

type GetHTMLUsingGet200ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data *GetHTMLUsingGet200ApplicationJSONData `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetHTMLUsingGet400ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetHTMLUsingGet401ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetHTMLUsingGet500ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetHTMLUsingGetResponse struct {
    ContentType string 
    StatusCode int64 
    GetHTMLUsingGet200ApplicationJSONObject *GetHTMLUsingGet200ApplicationJSON 
    GetHTMLUsingGet400ApplicationJSONObject *GetHTMLUsingGet400ApplicationJSON 
    GetHTMLUsingGet401ApplicationJSONObject *GetHTMLUsingGet401ApplicationJSON 
    GetHTMLUsingGet500ApplicationJSONObject *GetHTMLUsingGet500ApplicationJSON 
    
}

