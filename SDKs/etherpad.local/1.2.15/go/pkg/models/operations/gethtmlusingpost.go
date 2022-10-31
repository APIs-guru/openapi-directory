package operations



type GetHTMLUsingPostQueryParams struct {
    PadID *string `queryParam:"style=form,explode=true,name=padID"`
    Rev *string `queryParam:"style=form,explode=true,name=rev"`
    
}

type GetHTMLUsingPostRequest struct {
    QueryParams GetHTMLUsingPostQueryParams 
    
}

type GetHTMLUsingPost200ApplicationJSONData struct {
    HTML *string `json:"html,omitempty"`
    
}

type GetHTMLUsingPost200ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data *GetHTMLUsingPost200ApplicationJSONData `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetHTMLUsingPost400ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetHTMLUsingPost401ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetHTMLUsingPost500ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetHTMLUsingPostResponse struct {
    ContentType string 
    StatusCode int64 
    GetHTMLUsingPost200ApplicationJSONObject *GetHTMLUsingPost200ApplicationJSON 
    GetHTMLUsingPost400ApplicationJSONObject *GetHTMLUsingPost400ApplicationJSON 
    GetHTMLUsingPost401ApplicationJSONObject *GetHTMLUsingPost401ApplicationJSON 
    GetHTMLUsingPost500ApplicationJSONObject *GetHTMLUsingPost500ApplicationJSON 
    
}

