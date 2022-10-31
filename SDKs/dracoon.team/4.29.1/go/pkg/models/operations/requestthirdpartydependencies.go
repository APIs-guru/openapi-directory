package operations

import (
"openapi/pkg/models/shared")

type RequestThirdPartyDependenciesResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    ThirdPartyDependenciesData []shared.ThirdPartyDependenciesData 
    
}

