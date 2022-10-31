package operations

import (
"time")

type ActivityMarkRepoNotificationsAsReadPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ActivityMarkRepoNotificationsAsReadRequestBody struct {
    LastReadAt *time.Time `json:"last_read_at,omitempty"`
    
}

type ActivityMarkRepoNotificationsAsReadRequest struct {
    PathParams ActivityMarkRepoNotificationsAsReadPathParams 
    Request *ActivityMarkRepoNotificationsAsReadRequestBody `request:"mediaType=application/json"`
    
}

type ActivityMarkRepoNotificationsAsRead202ApplicationJSON struct {
    Message *string `json:"message,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ActivityMarkRepoNotificationsAsReadResponse struct {
    ContentType string 
    StatusCode int64 
    ActivityMarkRepoNotificationsAsRead202ApplicationJSONObject *ActivityMarkRepoNotificationsAsRead202ApplicationJSON 
    
}

