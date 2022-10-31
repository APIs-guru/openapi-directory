package operations

import (
"openapi/pkg/models/shared")

type EnterpriseAdminCreateRemoveTokenForEnterprisePathParams struct {
    Enterprise string `pathParam:"style=simple,explode=false,name=enterprise"`
    
}

type EnterpriseAdminCreateRemoveTokenForEnterpriseRequest struct {
    PathParams EnterpriseAdminCreateRemoveTokenForEnterprisePathParams 
    
}

type EnterpriseAdminCreateRemoveTokenForEnterpriseResponse struct {
    ContentType string 
    StatusCode int64 
    AuthenticationToken *shared.AuthenticationToken 
    
}

