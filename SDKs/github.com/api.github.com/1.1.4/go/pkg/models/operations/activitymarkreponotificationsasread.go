package operations



type ActivityMarkRepoNotificationsAsReadPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ActivityMarkRepoNotificationsAsReadRequestBody struct {
    LastReadAt *string `json:"last_read_at,omitempty"`
    
}

type ActivityMarkRepoNotificationsAsReadRequest struct {
    PathParams ActivityMarkRepoNotificationsAsReadPathParams 
    Request *ActivityMarkRepoNotificationsAsReadRequestBody `request:"mediaType=application/json"`
    
}

type ActivityMarkRepoNotificationsAsReadResponse struct {
    ContentType string 
    StatusCode int64 
    
}

