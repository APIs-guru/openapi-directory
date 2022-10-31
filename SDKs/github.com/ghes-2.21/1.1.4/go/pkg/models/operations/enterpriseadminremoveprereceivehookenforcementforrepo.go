package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminRemovePreReceiveHookEnforcementForRepoPathParams struct {
	Owner            string `pathParam:"style=simple,explode=false,name=owner"`
	PreReceiveHookID int64  `pathParam:"style=simple,explode=false,name=pre_receive_hook_id"`
	Repo             string `pathParam:"style=simple,explode=false,name=repo"`
}

type EnterpriseAdminRemovePreReceiveHookEnforcementForRepoRequest struct {
	PathParams EnterpriseAdminRemovePreReceiveHookEnforcementForRepoPathParams
}

type EnterpriseAdminRemovePreReceiveHookEnforcementForRepoResponse struct {
	ContentType              string
	StatusCode               int64
	RepositoryPreReceiveHook *shared.RepositoryPreReceiveHook
}
