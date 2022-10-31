package operations

import (
"openapi/pkg/models/shared")

type RequestActiveDirectoryAuthInfoQueryParams struct {
    IsGlobalAvailable *bool `queryParam:"style=form,explode=true,name=is_global_available"`
    
}

type RequestActiveDirectoryAuthInfoRequest struct {
    QueryParams RequestActiveDirectoryAuthInfoQueryParams 
    
}

type RequestActiveDirectoryAuthInfoResponse struct {
    ActiveDirectoryAuthInfo *shared.ActiveDirectoryAuthInfo 
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

