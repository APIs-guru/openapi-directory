package operations

import (
"openapi/pkg/models/shared")

type RequestOpenIDAuthInfoQueryParams struct {
    IsGlobalAvailable *bool `queryParam:"style=form,explode=true,name=is_global_available"`
    
}

type RequestOpenIDAuthInfoRequest struct {
    QueryParams RequestOpenIDAuthInfoQueryParams 
    
}

type RequestOpenIDAuthInfoResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    OpenIDAuthInfo *shared.OpenIDAuthInfo 
    StatusCode int64 
    
}

