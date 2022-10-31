package operations

import (
"openapi/pkg/models/shared")

type PostUsersMeNotificationsReadRequestBody struct {
    Ids []int64 `json:"ids"`
    
}

type PostUsersMeNotificationsReadSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type PostUsersMeNotificationsReadRequest struct {
    Request *PostUsersMeNotificationsReadRequestBody `request:"mediaType=application/json"`
    Security PostUsersMeNotificationsReadSecurity 
    
}

type PostUsersMeNotificationsReadResponse struct {
    ContentType string 
    StatusCode int64 
    
}

