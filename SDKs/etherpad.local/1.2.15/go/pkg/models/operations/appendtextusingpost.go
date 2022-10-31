package operations



type AppendTextUsingPostQueryParams struct {
    PadID *string `queryParam:"style=form,explode=true,name=padID"`
    Text *string `queryParam:"style=form,explode=true,name=text"`
    
}

type AppendTextUsingPostRequest struct {
    QueryParams AppendTextUsingPostQueryParams 
    
}

type AppendTextUsingPost200ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type AppendTextUsingPost400ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type AppendTextUsingPost401ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type AppendTextUsingPost500ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type AppendTextUsingPostResponse struct {
    ContentType string 
    StatusCode int64 
    AppendTextUsingPost200ApplicationJSONObject *AppendTextUsingPost200ApplicationJSON 
    AppendTextUsingPost400ApplicationJSONObject *AppendTextUsingPost400ApplicationJSON 
    AppendTextUsingPost401ApplicationJSONObject *AppendTextUsingPost401ApplicationJSON 
    AppendTextUsingPost500ApplicationJSONObject *AppendTextUsingPost500ApplicationJSON 
    
}

