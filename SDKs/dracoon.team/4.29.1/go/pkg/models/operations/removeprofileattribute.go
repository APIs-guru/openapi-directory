package operations

import (
"openapi/pkg/models/shared")

type RemoveProfileAttributePathParams struct {
    Key string `pathParam:"style=simple,explode=false,name=key"`
    
}

type RemoveProfileAttributeHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type RemoveProfileAttributeRequest struct {
    PathParams RemoveProfileAttributePathParams 
    Headers RemoveProfileAttributeHeaders 
    
}

type RemoveProfileAttributeResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

