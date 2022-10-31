package operations

import (
"openapi/pkg/models/shared")

type PostNotificationsRequestBody struct {
    GroupID *int32 `multipartForm:"name=group_id"`
    NotifyOnCopy *bool `multipartForm:"name=notify_on_copy"`
    NotifyUserActions *bool `multipartForm:"name=notify_user_actions"`
    Path *string `multipartForm:"name=path"`
    Recursive *bool `multipartForm:"name=recursive"`
    SendInterval *string `multipartForm:"name=send_interval"`
    UserID *int32 `multipartForm:"name=user_id"`
    Username *string `multipartForm:"name=username"`
    
}

type PostNotificationsRequest struct {
    Request *PostNotificationsRequestBody `request:"mediaType=multipart/form-data"`
    
}

type PostNotificationsResponse struct {
    ContentType string 
    NotificationEntity *shared.NotificationEntity 
    StatusCode int64 
    
}

