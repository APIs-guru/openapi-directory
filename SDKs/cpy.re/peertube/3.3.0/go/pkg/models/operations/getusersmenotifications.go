package operations

import (
"openapi/pkg/models/shared")

type GetUsersMeNotificationsQueryParams struct {
    Count *int64 `queryParam:"style=form,explode=true,name=count"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    Start *int64 `queryParam:"style=form,explode=true,name=start"`
    Unread *bool `queryParam:"style=form,explode=true,name=unread"`
    
}

type GetUsersMeNotificationsSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type GetUsersMeNotificationsRequest struct {
    QueryParams GetUsersMeNotificationsQueryParams 
    Security GetUsersMeNotificationsSecurity 
    
}

type GetUsersMeNotificationsResponse struct {
    ContentType string 
    NotificationListResponse *interface{} 
    StatusCode int64 
    
}

