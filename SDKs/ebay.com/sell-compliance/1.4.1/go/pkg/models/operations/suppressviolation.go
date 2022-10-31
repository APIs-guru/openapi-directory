package operations

import (
"openapi/pkg/models/shared")

type SuppressViolationSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type SuppressViolationRequest struct {
    Request shared.SuppressViolationRequest `request:"mediaType=application/json"`
    Security SuppressViolationSecurity 
    
}

type SuppressViolationResponse struct {
    ContentType string 
    StatusCode int64 
    
}

