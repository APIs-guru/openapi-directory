package operations



type GetChatHeadUsingGetQueryParams struct {
    PadID *string `queryParam:"style=form,explode=true,name=padID"`
    
}

type GetChatHeadUsingGetRequest struct {
    QueryParams GetChatHeadUsingGetQueryParams 
    
}

type GetChatHeadUsingGet200ApplicationJSONDataChatHead struct {
    Text *string `json:"text,omitempty"`
    Time *int64 `json:"time,omitempty"`
    UserID *string `json:"userId,omitempty"`
    UserName *string `json:"userName,omitempty"`
    
}

type GetChatHeadUsingGet200ApplicationJSONData struct {
    ChatHead *GetChatHeadUsingGet200ApplicationJSONDataChatHead `json:"chatHead,omitempty"`
    
}

type GetChatHeadUsingGet200ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data *GetChatHeadUsingGet200ApplicationJSONData `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetChatHeadUsingGet400ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetChatHeadUsingGet401ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetChatHeadUsingGet500ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GetChatHeadUsingGetResponse struct {
    ContentType string 
    StatusCode int64 
    GetChatHeadUsingGet200ApplicationJSONObject *GetChatHeadUsingGet200ApplicationJSON 
    GetChatHeadUsingGet400ApplicationJSONObject *GetChatHeadUsingGet400ApplicationJSON 
    GetChatHeadUsingGet401ApplicationJSONObject *GetChatHeadUsingGet401ApplicationJSON 
    GetChatHeadUsingGet500ApplicationJSONObject *GetChatHeadUsingGet500ApplicationJSON 
    
}

