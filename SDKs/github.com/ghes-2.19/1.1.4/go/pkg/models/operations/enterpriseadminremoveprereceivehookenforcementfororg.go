package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminRemovePreReceiveHookEnforcementForOrgPathParams struct {
	Org              string `pathParam:"style=simple,explode=false,name=org"`
	PreReceiveHookID int64  `pathParam:"style=simple,explode=false,name=pre_receive_hook_id"`
}

type EnterpriseAdminRemovePreReceiveHookEnforcementForOrgRequest struct {
	PathParams EnterpriseAdminRemovePreReceiveHookEnforcementForOrgPathParams
}

type EnterpriseAdminRemovePreReceiveHookEnforcementForOrgResponse struct {
	ContentType       string
	StatusCode        int64
	OrgPreReceiveHook *shared.OrgPreReceiveHook
}
