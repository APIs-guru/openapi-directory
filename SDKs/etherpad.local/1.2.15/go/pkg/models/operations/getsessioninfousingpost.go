package operations



type GetSessionInfoUsingPostQueryParams struct {
    SessionID *string `queryParam:"style=form,explode=true,name=sessionID"`
    
}

type GetSessionInfoUsingPostRequest struct {
    QueryParams GetSessionInfoUsingPostQueryParams 
    
}

type GetSessionInfoUsingPost200ApplicationJSONDataInfo struct {
    AuthorID *string `json:"authorID,omitempty"`
    GroupID *string `json:"groupID,omitempty"`
    ID *string `json:"id,omitempty"`
    ValidUntil *int64 `json:"validUntil,omitempty"`
    
}

type GetSessionInfoUsingPost200ApplicationJSONData struct {
    Info *GetSessionInfoUsingPost200ApplicationJSONDataInfo `json:"info,omitempty"`
    
}

type GetSessionInfoUsingPost200ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data *GetSessionInfoUsingPost200ApplicationJSONData `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetSessionInfoUsingPost400ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetSessionInfoUsingPost401ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetSessionInfoUsingPost500ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetSessionInfoUsingPostResponse struct {
    ContentType string 
    StatusCode int64 
    GetSessionInfoUsingPost200ApplicationJSONObject *GetSessionInfoUsingPost200ApplicationJSON 
    GetSessionInfoUsingPost400ApplicationJSONObject *GetSessionInfoUsingPost400ApplicationJSON 
    GetSessionInfoUsingPost401ApplicationJSONObject *GetSessionInfoUsingPost401ApplicationJSON 
    GetSessionInfoUsingPost500ApplicationJSONObject *GetSessionInfoUsingPost500ApplicationJSON 
    
}

