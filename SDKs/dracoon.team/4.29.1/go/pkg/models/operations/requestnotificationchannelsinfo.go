package operations

import (
"openapi/pkg/models/shared")

type RequestNotificationChannelsInfoHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type RequestNotificationChannelsInfoRequest struct {
    Headers RequestNotificationChannelsInfoHeaders 
    
}

type RequestNotificationChannelsInfoResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    NotificationChannelList *shared.NotificationChannelList 
    StatusCode int64 
    
}

