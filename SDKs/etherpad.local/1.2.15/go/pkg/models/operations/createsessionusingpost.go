package operations



type CreateSessionUsingPostQueryParams struct {
    AuthorID *string `queryParam:"style=form,explode=true,name=authorID"`
    GroupID *string `queryParam:"style=form,explode=true,name=groupID"`
    ValidUntil *string `queryParam:"style=form,explode=true,name=validUntil"`
    
}

type CreateSessionUsingPostRequest struct {
    QueryParams CreateSessionUsingPostQueryParams 
    
}

type CreateSessionUsingPost200ApplicationJSONData struct {
    SessionID *string `json:"sessionID,omitempty"`
    
}

type CreateSessionUsingPost200ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data *CreateSessionUsingPost200ApplicationJSONData `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type CreateSessionUsingPost400ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type CreateSessionUsingPost401ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type CreateSessionUsingPost500ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type CreateSessionUsingPostResponse struct {
    ContentType string 
    StatusCode int64 
    CreateSessionUsingPost200ApplicationJSONObject *CreateSessionUsingPost200ApplicationJSON 
    CreateSessionUsingPost400ApplicationJSONObject *CreateSessionUsingPost400ApplicationJSON 
    CreateSessionUsingPost401ApplicationJSONObject *CreateSessionUsingPost401ApplicationJSON 
    CreateSessionUsingPost500ApplicationJSONObject *CreateSessionUsingPost500ApplicationJSON 
    
}

