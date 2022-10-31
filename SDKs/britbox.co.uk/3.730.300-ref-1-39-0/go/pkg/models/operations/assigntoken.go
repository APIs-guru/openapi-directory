package operations

import (
"openapi/pkg/models/shared")

type AssignTokenQueryParams struct {
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type AssignTokenSecurity struct {
    AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
    
}

type AssignTokenRequest struct {
    QueryParams AssignTokenQueryParams 
    Request shared.ItvAssignBtTokenRequest `request:"mediaType=application/json"`
    Security AssignTokenSecurity 
    
}

type AssignTokenResponse struct {
    ContentType string 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

