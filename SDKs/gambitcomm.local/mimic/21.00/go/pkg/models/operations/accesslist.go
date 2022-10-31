package operations

import (
"openapi/pkg/models/shared")

type AccessListResponse struct {
    AccessEntries []shared.AccessEntry 
    ContentType string 
    StatusCode int64 
    
}

