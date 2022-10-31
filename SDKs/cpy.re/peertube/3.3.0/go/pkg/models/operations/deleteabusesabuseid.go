package operations

import (
"openapi/pkg/models/shared")

type DeleteAbusesAbuseIDPathParams struct {
    AbuseID int64 `pathParam:"style=simple,explode=false,name=abuseId"`
    
}

type DeleteAbusesAbuseIDSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type DeleteAbusesAbuseIDRequest struct {
    PathParams DeleteAbusesAbuseIDPathParams 
    Security DeleteAbusesAbuseIDSecurity 
    
}

type DeleteAbusesAbuseIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

