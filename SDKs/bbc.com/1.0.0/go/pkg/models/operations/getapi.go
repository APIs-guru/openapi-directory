package operations

import (
"openapi/pkg/models/shared")

type GetAPIResponse struct {
    Body []byte 
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    
}

