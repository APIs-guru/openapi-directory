package operations

import (
"openapi/pkg/models/shared")

type EnterpriseAdminGetPreReceiveHookForOrgPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    PreReceiveHookID int64 `pathParam:"style=simple,explode=false,name=pre_receive_hook_id"`
    
}

type EnterpriseAdminGetPreReceiveHookForOrgRequest struct {
    PathParams EnterpriseAdminGetPreReceiveHookForOrgPathParams 
    
}

type EnterpriseAdminGetPreReceiveHookForOrgResponse struct {
    ContentType string 
    StatusCode int64 
    OrgPreReceiveHook *shared.OrgPreReceiveHook 
    
}

