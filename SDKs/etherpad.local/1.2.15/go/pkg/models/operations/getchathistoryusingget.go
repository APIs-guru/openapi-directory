package operations



type GetChatHistoryUsingGetQueryParams struct {
    End *string `queryParam:"style=form,explode=true,name=end"`
    PadID *string `queryParam:"style=form,explode=true,name=padID"`
    Start *string `queryParam:"style=form,explode=true,name=start"`
    
}

type GetChatHistoryUsingGetRequest struct {
    QueryParams GetChatHistoryUsingGetQueryParams 
    
}

type GetChatHistoryUsingGet200ApplicationJSONDataMessages struct {
    Text *string `json:"text,omitempty"`
    Time *int64 `json:"time,omitempty"`
    UserID *string `json:"userId,omitempty"`
    UserName *string `json:"userName,omitempty"`
    
}

type GetChatHistoryUsingGet200ApplicationJSONData struct {
    Messages []GetChatHistoryUsingGet200ApplicationJSONDataMessages `json:"messages,omitempty"`
    
}

type GetChatHistoryUsingGet200ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data *GetChatHistoryUsingGet200ApplicationJSONData `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetChatHistoryUsingGet400ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetChatHistoryUsingGet401ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetChatHistoryUsingGet500ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetChatHistoryUsingGetResponse struct {
    ContentType string 
    StatusCode int64 
    GetChatHistoryUsingGet200ApplicationJSONObject *GetChatHistoryUsingGet200ApplicationJSON 
    GetChatHistoryUsingGet400ApplicationJSONObject *GetChatHistoryUsingGet400ApplicationJSON 
    GetChatHistoryUsingGet401ApplicationJSONObject *GetChatHistoryUsingGet401ApplicationJSON 
    GetChatHistoryUsingGet500ApplicationJSONObject *GetChatHistoryUsingGet500ApplicationJSON 
    
}

