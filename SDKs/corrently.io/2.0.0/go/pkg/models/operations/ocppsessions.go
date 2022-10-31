package operations

import (
"openapi/pkg/models/shared")

type OcppSessionsResponse struct {
    ContentType string 
    StatusCode int64 
    EaseeChargers []shared.EaseeCharger 
    
}

