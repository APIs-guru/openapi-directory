package operations

import (
"openapi/pkg/models/shared")

type EnterpriseAdminSetAllowedActionsEnterprisePathParams struct {
    Enterprise string `pathParam:"style=simple,explode=false,name=enterprise"`
    
}

type EnterpriseAdminSetAllowedActionsEnterpriseRequest struct {
    PathParams EnterpriseAdminSetAllowedActionsEnterprisePathParams 
    Request *shared.SelectedActions `request:"mediaType=application/json"`
    
}

type EnterpriseAdminSetAllowedActionsEnterpriseResponse struct {
    ContentType string 
    StatusCode int64 
    
}

