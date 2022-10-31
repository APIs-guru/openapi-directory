package operations

import (
"openapi/pkg/models/shared")

type UpdateNotificationConfigPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type UpdateNotificationConfigHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type UpdateNotificationConfigRequest struct {
    PathParams UpdateNotificationConfigPathParams 
    Headers UpdateNotificationConfigHeaders 
    Request shared.NotificationConfigChangeRequest `request:"mediaType=application/json"`
    
}

type UpdateNotificationConfigResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    NotificationConfig *shared.NotificationConfig 
    StatusCode int64 
    
}

