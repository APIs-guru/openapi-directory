package operations



type CreateSessionUsingGetQueryParams struct {
    AuthorID *string `queryParam:"style=form,explode=true,name=authorID"`
    GroupID *string `queryParam:"style=form,explode=true,name=groupID"`
    ValidUntil *string `queryParam:"style=form,explode=true,name=validUntil"`
    
}

type CreateSessionUsingGetRequest struct {
    QueryParams CreateSessionUsingGetQueryParams 
    
}

type CreateSessionUsingGet200ApplicationJSONData struct {
    SessionID *string `json:"sessionID,omitempty"`
    
}

type CreateSessionUsingGet200ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data *CreateSessionUsingGet200ApplicationJSONData `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type CreateSessionUsingGet400ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type CreateSessionUsingGet401ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type CreateSessionUsingGet500ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type CreateSessionUsingGetResponse struct {
    ContentType string 
    StatusCode int64 
    CreateSessionUsingGet200ApplicationJSONObject *CreateSessionUsingGet200ApplicationJSON 
    CreateSessionUsingGet400ApplicationJSONObject *CreateSessionUsingGet400ApplicationJSON 
    CreateSessionUsingGet401ApplicationJSONObject *CreateSessionUsingGet401ApplicationJSON 
    CreateSessionUsingGet500ApplicationJSONObject *CreateSessionUsingGet500ApplicationJSON 
    
}

