package operations

import (
"openapi/pkg/models/shared")

type EnterpriseAdminCreateRegistrationTokenForEnterprisePathParams struct {
    Enterprise string `pathParam:"style=simple,explode=false,name=enterprise"`
    
}

type EnterpriseAdminCreateRegistrationTokenForEnterpriseRequest struct {
    PathParams EnterpriseAdminCreateRegistrationTokenForEnterprisePathParams 
    
}

type EnterpriseAdminCreateRegistrationTokenForEnterpriseResponse struct {
    ContentType string 
    StatusCode int64 
    AuthenticationToken *shared.AuthenticationToken 
    
}

