package operations



type PutPostsIDLockedJSONPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutPostsIDLockedJSONHeaders struct {
    APIKey string `header:"style=simple,explode=false,name=Api-Key"`
    APIUsername string `header:"style=simple,explode=false,name=Api-Username"`
    
}

type PutPostsIDLockedJSONRequestBody struct {
    Locked bool `json:"locked"`
    
}

type PutPostsIDLockedJSONRequest struct {
    PathParams PutPostsIDLockedJSONPathParams 
    Headers PutPostsIDLockedJSONHeaders 
    Request *PutPostsIDLockedJSONRequestBody `request:"mediaType=application/json"`
    
}

type PutPostsIDLockedJSON200ApplicationJSON struct {
    Locked *bool `json:"locked,omitempty"`
    
}

type PutPostsIDLockedJSONResponse struct {
    ContentType string 
    PutPostsIDLockedJSON200ApplicationJSONObject *PutPostsIDLockedJSON200ApplicationJSON 
    StatusCode int64 
    
}

