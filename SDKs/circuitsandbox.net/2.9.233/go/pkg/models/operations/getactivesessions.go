package operations

import (
"openapi/pkg/models/shared")

type GetActiveSessionsSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetActiveSessionsRequest struct {
    Security GetActiveSessionsSecurity 
    
}

type GetActiveSessionsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

