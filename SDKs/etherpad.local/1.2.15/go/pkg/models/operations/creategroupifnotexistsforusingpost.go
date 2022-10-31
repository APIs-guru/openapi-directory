package operations



type CreateGroupIfNotExistsForUsingPostQueryParams struct {
    GroupMapper *string `queryParam:"style=form,explode=true,name=groupMapper"`
    
}

type CreateGroupIfNotExistsForUsingPostRequest struct {
    QueryParams CreateGroupIfNotExistsForUsingPostQueryParams 
    
}

type CreateGroupIfNotExistsForUsingPost200ApplicationJSONData struct {
    GroupID *string `json:"groupID,omitempty"`
    
}

type CreateGroupIfNotExistsForUsingPost200ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data *CreateGroupIfNotExistsForUsingPost200ApplicationJSONData `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type CreateGroupIfNotExistsForUsingPost400ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type CreateGroupIfNotExistsForUsingPost401ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type CreateGroupIfNotExistsForUsingPost500ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type CreateGroupIfNotExistsForUsingPostResponse struct {
    ContentType string 
    StatusCode int64 
    CreateGroupIfNotExistsForUsingPost200ApplicationJSONObject *CreateGroupIfNotExistsForUsingPost200ApplicationJSON 
    CreateGroupIfNotExistsForUsingPost400ApplicationJSONObject *CreateGroupIfNotExistsForUsingPost400ApplicationJSON 
    CreateGroupIfNotExistsForUsingPost401ApplicationJSONObject *CreateGroupIfNotExistsForUsingPost401ApplicationJSON 
    CreateGroupIfNotExistsForUsingPost500ApplicationJSONObject *CreateGroupIfNotExistsForUsingPost500ApplicationJSON 
    
}

