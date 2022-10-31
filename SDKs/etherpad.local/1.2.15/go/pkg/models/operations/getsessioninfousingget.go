package operations



type GetSessionInfoUsingGetQueryParams struct {
    SessionID *string `queryParam:"style=form,explode=true,name=sessionID"`
    
}

type GetSessionInfoUsingGetRequest struct {
    QueryParams GetSessionInfoUsingGetQueryParams 
    
}

type GetSessionInfoUsingGet200ApplicationJSONDataInfo struct {
    AuthorID *string `json:"authorID,omitempty"`
    GroupID *string `json:"groupID,omitempty"`
    ID *string `json:"id,omitempty"`
    ValidUntil *int64 `json:"validUntil,omitempty"`
    
}

type GetSessionInfoUsingGet200ApplicationJSONData struct {
    Info *GetSessionInfoUsingGet200ApplicationJSONDataInfo `json:"info,omitempty"`
    
}

type GetSessionInfoUsingGet200ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data *GetSessionInfoUsingGet200ApplicationJSONData `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetSessionInfoUsingGet400ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetSessionInfoUsingGet401ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetSessionInfoUsingGet500ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetSessionInfoUsingGetResponse struct {
    ContentType string 
    StatusCode int64 
    GetSessionInfoUsingGet200ApplicationJSONObject *GetSessionInfoUsingGet200ApplicationJSON 
    GetSessionInfoUsingGet400ApplicationJSONObject *GetSessionInfoUsingGet400ApplicationJSON 
    GetSessionInfoUsingGet401ApplicationJSONObject *GetSessionInfoUsingGet401ApplicationJSON 
    GetSessionInfoUsingGet500ApplicationJSONObject *GetSessionInfoUsingGet500ApplicationJSON 
    
}

