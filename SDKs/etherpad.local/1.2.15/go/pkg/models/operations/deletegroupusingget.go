package operations



type DeleteGroupUsingGetQueryParams struct {
    GroupID *string `queryParam:"style=form,explode=true,name=groupID"`
    
}

type DeleteGroupUsingGetRequest struct {
    QueryParams DeleteGroupUsingGetQueryParams 
    
}

type DeleteGroupUsingGet200ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type DeleteGroupUsingGet400ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type DeleteGroupUsingGet401ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type DeleteGroupUsingGet500ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type DeleteGroupUsingGetResponse struct {
    ContentType string 
    StatusCode int64 
    DeleteGroupUsingGet200ApplicationJSONObject *DeleteGroupUsingGet200ApplicationJSON 
    DeleteGroupUsingGet400ApplicationJSONObject *DeleteGroupUsingGet400ApplicationJSON 
    DeleteGroupUsingGet401ApplicationJSONObject *DeleteGroupUsingGet401ApplicationJSON 
    DeleteGroupUsingGet500ApplicationJSONObject *DeleteGroupUsingGet500ApplicationJSON 
    
}

