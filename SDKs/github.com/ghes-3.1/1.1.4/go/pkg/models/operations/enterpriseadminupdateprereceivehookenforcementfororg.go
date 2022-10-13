package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgPathParams struct {
	Org              string `pathParam:"style=simple,explode=false,name=org"`
	PreReceiveHookID int64  `pathParam:"style=simple,explode=false,name=pre_receive_hook_id"`
}

type EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequestBody struct {
	AllowDownstreamConfiguration *bool   `json:"allow_downstream_configuration"`
	Enforcement                  *string `json:"enforcement"`
}

type EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequest struct {
	PathParams EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgPathParams
	Request    *EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgRequestBody `request:"mediaType=application/json"`
}

type EnterpriseAdminUpdatePreReceiveHookEnforcementForOrgResponse struct {
	ContentType       string
	StatusCode        int64
	OrgPreReceiveHook *shared.OrgPreReceiveHook
}
