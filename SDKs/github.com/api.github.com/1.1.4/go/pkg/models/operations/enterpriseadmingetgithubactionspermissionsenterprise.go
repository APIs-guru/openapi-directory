package operations

import (
"openapi/pkg/models/shared")

type EnterpriseAdminGetGithubActionsPermissionsEnterprisePathParams struct {
    Enterprise string `pathParam:"style=simple,explode=false,name=enterprise"`
    
}

type EnterpriseAdminGetGithubActionsPermissionsEnterpriseRequest struct {
    PathParams EnterpriseAdminGetGithubActionsPermissionsEnterprisePathParams 
    
}

type EnterpriseAdminGetGithubActionsPermissionsEnterpriseResponse struct {
    ContentType string 
    StatusCode int64 
    ActionsEnterprisePermissions *shared.ActionsEnterprisePermissions 
    
}

