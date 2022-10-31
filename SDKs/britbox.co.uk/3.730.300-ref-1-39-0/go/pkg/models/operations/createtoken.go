package operations

import (
"openapi/pkg/models/shared")

type CreateTokenResponse struct {
    ContentType string 
    EeCreateTokenResponse *shared.EeCreateTokenResponse 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

