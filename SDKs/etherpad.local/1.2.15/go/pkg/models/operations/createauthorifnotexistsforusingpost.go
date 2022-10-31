package operations



type CreateAuthorIfNotExistsForUsingPostQueryParams struct {
    AuthorMapper *string `queryParam:"style=form,explode=true,name=authorMapper"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    
}

type CreateAuthorIfNotExistsForUsingPostRequest struct {
    QueryParams CreateAuthorIfNotExistsForUsingPostQueryParams 
    
}

type CreateAuthorIfNotExistsForUsingPost200ApplicationJSONData struct {
    AuthorID *string `json:"authorID,omitempty"`
    
}

type CreateAuthorIfNotExistsForUsingPost200ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data *CreateAuthorIfNotExistsForUsingPost200ApplicationJSONData `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type CreateAuthorIfNotExistsForUsingPost400ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type CreateAuthorIfNotExistsForUsingPost401ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type CreateAuthorIfNotExistsForUsingPost500ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type CreateAuthorIfNotExistsForUsingPostResponse struct {
    ContentType string 
    StatusCode int64 
    CreateAuthorIfNotExistsForUsingPost200ApplicationJSONObject *CreateAuthorIfNotExistsForUsingPost200ApplicationJSON 
    CreateAuthorIfNotExistsForUsingPost400ApplicationJSONObject *CreateAuthorIfNotExistsForUsingPost400ApplicationJSON 
    CreateAuthorIfNotExistsForUsingPost401ApplicationJSONObject *CreateAuthorIfNotExistsForUsingPost401ApplicationJSON 
    CreateAuthorIfNotExistsForUsingPost500ApplicationJSONObject *CreateAuthorIfNotExistsForUsingPost500ApplicationJSON 
    
}

