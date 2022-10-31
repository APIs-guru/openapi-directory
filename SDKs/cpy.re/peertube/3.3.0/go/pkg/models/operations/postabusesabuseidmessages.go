package operations

import (
"openapi/pkg/models/shared")

type PostAbusesAbuseIDMessagesPathParams struct {
    AbuseID int64 `pathParam:"style=simple,explode=false,name=abuseId"`
    
}

type PostAbusesAbuseIDMessagesRequestBody struct {
    Message string `json:"message"`
    
}

type PostAbusesAbuseIDMessagesSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type PostAbusesAbuseIDMessagesRequest struct {
    PathParams PostAbusesAbuseIDMessagesPathParams 
    Request PostAbusesAbuseIDMessagesRequestBody `request:"mediaType=application/json"`
    Security PostAbusesAbuseIDMessagesSecurity 
    
}

type PostAbusesAbuseIDMessagesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

