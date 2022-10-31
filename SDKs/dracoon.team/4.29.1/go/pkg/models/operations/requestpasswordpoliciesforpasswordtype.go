package operations

import (
"openapi/pkg/models/shared")

type RequestPasswordPoliciesForPasswordTypePathParams struct {
    PasswordType interface{} `pathParam:"style=simple,explode=false,name=password_type"`
    
}

type RequestPasswordPoliciesForPasswordTypeHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type RequestPasswordPoliciesForPasswordTypeRequest struct {
    PathParams RequestPasswordPoliciesForPasswordTypePathParams 
    Headers RequestPasswordPoliciesForPasswordTypeHeaders 
    
}

type RequestPasswordPoliciesForPasswordTypeResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    PasswordPoliciesConfig *shared.PasswordPoliciesConfig 
    StatusCode int64 
    
}

