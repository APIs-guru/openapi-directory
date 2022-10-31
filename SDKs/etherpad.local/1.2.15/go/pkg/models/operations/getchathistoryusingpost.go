package operations



type GetChatHistoryUsingPostQueryParams struct {
    End *string `queryParam:"style=form,explode=true,name=end"`
    PadID *string `queryParam:"style=form,explode=true,name=padID"`
    Start *string `queryParam:"style=form,explode=true,name=start"`
    
}

type GetChatHistoryUsingPostRequest struct {
    QueryParams GetChatHistoryUsingPostQueryParams 
    
}

type GetChatHistoryUsingPost200ApplicationJSONDataMessages struct {
    Text *string `json:"text,omitempty"`
    Time *int64 `json:"time,omitempty"`
    UserID *string `json:"userId,omitempty"`
    UserName *string `json:"userName,omitempty"`
    
}

type GetChatHistoryUsingPost200ApplicationJSONData struct {
    Messages []GetChatHistoryUsingPost200ApplicationJSONDataMessages `json:"messages,omitempty"`
    
}

type GetChatHistoryUsingPost200ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data *GetChatHistoryUsingPost200ApplicationJSONData `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetChatHistoryUsingPost400ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetChatHistoryUsingPost401ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetChatHistoryUsingPost500ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetChatHistoryUsingPostResponse struct {
    ContentType string 
    StatusCode int64 
    GetChatHistoryUsingPost200ApplicationJSONObject *GetChatHistoryUsingPost200ApplicationJSON 
    GetChatHistoryUsingPost400ApplicationJSONObject *GetChatHistoryUsingPost400ApplicationJSON 
    GetChatHistoryUsingPost401ApplicationJSONObject *GetChatHistoryUsingPost401ApplicationJSON 
    GetChatHistoryUsingPost500ApplicationJSONObject *GetChatHistoryUsingPost500ApplicationJSON 
    
}

