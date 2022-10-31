package operations

import (
"openapi/pkg/models/shared")

type PostDomainsRegistrationsRequest struct {
    Request *shared.RegisterDomain `request:"mediaType=application/json"`
    
}

type PostDomainsRegistrationsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

