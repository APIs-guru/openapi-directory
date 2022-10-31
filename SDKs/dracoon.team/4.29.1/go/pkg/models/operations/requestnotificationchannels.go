package operations

import (
"openapi/pkg/models/shared")

type RequestNotificationChannelsHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type RequestNotificationChannelsRequest struct {
    Headers RequestNotificationChannelsHeaders 
    
}

type RequestNotificationChannelsResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    NotificationChannelList *shared.NotificationChannelList 
    StatusCode int64 
    
}

