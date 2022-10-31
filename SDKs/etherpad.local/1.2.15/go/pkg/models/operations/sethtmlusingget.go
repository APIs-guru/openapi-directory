package operations



type SetHTMLUsingGetQueryParams struct {
    HTML *string `queryParam:"style=form,explode=true,name=html"`
    PadID *string `queryParam:"style=form,explode=true,name=padID"`
    
}

type SetHTMLUsingGetRequest struct {
    QueryParams SetHTMLUsingGetQueryParams 
    
}

type SetHTMLUsingGet200ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type SetHTMLUsingGet400ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type SetHTMLUsingGet401ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type SetHTMLUsingGet500ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type SetHTMLUsingGetResponse struct {
    ContentType string 
    StatusCode int64 
    SetHTMLUsingGet200ApplicationJSONObject *SetHTMLUsingGet200ApplicationJSON 
    SetHTMLUsingGet400ApplicationJSONObject *SetHTMLUsingGet400ApplicationJSON 
    SetHTMLUsingGet401ApplicationJSONObject *SetHTMLUsingGet401ApplicationJSON 
    SetHTMLUsingGet500ApplicationJSONObject *SetHTMLUsingGet500ApplicationJSON 
    
}

