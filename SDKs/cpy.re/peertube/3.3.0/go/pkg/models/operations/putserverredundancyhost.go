package operations

import (
"openapi/pkg/models/shared")

type PutServerRedundancyHostPathParams struct {
    Host string `pathParam:"style=simple,explode=false,name=host"`
    
}

type PutServerRedundancyHostRequestBody struct {
    RedundancyAllowed bool `json:"redundancyAllowed"`
    
}

type PutServerRedundancyHostSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type PutServerRedundancyHostRequest struct {
    PathParams PutServerRedundancyHostPathParams 
    Request *PutServerRedundancyHostRequestBody `request:"mediaType=application/json"`
    Security PutServerRedundancyHostSecurity 
    
}

type PutServerRedundancyHostResponse struct {
    ContentType string 
    StatusCode int64 
    
}

