package operations

import (
"openapi/pkg/models/shared")

type EnterpriseAdminGetPreReceiveHookForRepoPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    PreReceiveHookID int64 `pathParam:"style=simple,explode=false,name=pre_receive_hook_id"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type EnterpriseAdminGetPreReceiveHookForRepoRequest struct {
    PathParams EnterpriseAdminGetPreReceiveHookForRepoPathParams 
    
}

type EnterpriseAdminGetPreReceiveHookForRepoResponse struct {
    ContentType string 
    StatusCode int64 
    RepositoryPreReceiveHook *shared.RepositoryPreReceiveHook 
    
}

