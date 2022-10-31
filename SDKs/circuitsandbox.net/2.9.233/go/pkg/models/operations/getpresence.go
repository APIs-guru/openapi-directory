package operations

import (
"openapi/pkg/models/shared")

type GetPresenceQueryParams struct {
    UserIds []string `queryParam:"style=form,explode=true,name=userIds"`
    
}

type GetPresenceSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetPresenceRequest struct {
    QueryParams GetPresenceQueryParams 
    Security GetPresenceSecurity 
    
}

type GetPresenceResponse struct {
    Body []byte 
    ContentType string 
    Presences []interface{} 
    StatusCode int64 
    
}

