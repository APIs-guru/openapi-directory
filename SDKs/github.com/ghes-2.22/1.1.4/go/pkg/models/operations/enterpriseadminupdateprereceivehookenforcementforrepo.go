package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoPathParams struct {
	Owner            string `pathParam:"style=simple,explode=false,name=owner"`
	PreReceiveHookID int64  `pathParam:"style=simple,explode=false,name=pre_receive_hook_id"`
	Repo             string `pathParam:"style=simple,explode=false,name=repo"`
}

type EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBodyEnforcementEnum string

const (
	EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBodyEnforcementEnumEnabled  EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBodyEnforcementEnum = "enabled"
	EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBodyEnforcementEnumDisabled EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBodyEnforcementEnum = "disabled"
	EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBodyEnforcementEnumTesting  EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBodyEnforcementEnum = "testing"
)

type EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBody struct {
	Enforcement *EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBodyEnforcementEnum `json:"enforcement"`
}

type EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequest struct {
	PathParams EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoPathParams
	Request    *EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoRequestBody `request:"mediaType=application/json"`
}

type EnterpriseAdminUpdatePreReceiveHookEnforcementForRepoResponse struct {
	ContentType              string
	StatusCode               int64
	RepositoryPreReceiveHook *shared.RepositoryPreReceiveHook
}
