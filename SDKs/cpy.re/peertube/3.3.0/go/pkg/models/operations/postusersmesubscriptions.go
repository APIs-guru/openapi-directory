package operations

import (
"openapi/pkg/models/shared")

type PostUsersMeSubscriptionsRequestBody struct {
    URI string `json:"uri"`
    
}

type PostUsersMeSubscriptionsSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type PostUsersMeSubscriptionsRequest struct {
    Request *PostUsersMeSubscriptionsRequestBody `request:"mediaType=application/json"`
    Security PostUsersMeSubscriptionsSecurity 
    
}

type PostUsersMeSubscriptionsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

