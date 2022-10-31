package operations

import (
"openapi/pkg/models/shared")

type PostUsersMeNotificationsReadAllSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type PostUsersMeNotificationsReadAllRequest struct {
    Security PostUsersMeNotificationsReadAllSecurity 
    
}

type PostUsersMeNotificationsReadAllResponse struct {
    ContentType string 
    StatusCode int64 
    
}

