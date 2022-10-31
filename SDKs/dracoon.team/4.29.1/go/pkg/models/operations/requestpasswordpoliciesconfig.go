package operations

import (
"openapi/pkg/models/shared")

type RequestPasswordPoliciesConfigHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type RequestPasswordPoliciesConfigRequest struct {
    Headers RequestPasswordPoliciesConfigHeaders 
    
}

type RequestPasswordPoliciesConfigResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    PasswordPoliciesConfig *shared.PasswordPoliciesConfig 
    StatusCode int64 
    
}

