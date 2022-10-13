package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminUpdatePreReceiveHookPathParams struct {
	PreReceiveHookID int64 `pathParam:"style=simple,explode=false,name=pre_receive_hook_id"`
}

type EnterpriseAdminUpdatePreReceiveHookRequestBody struct {
	AllowDownstreamConfiguration *bool                  `json:"allow_downstream_configuration"`
	Enforcement                  *string                `json:"enforcement"`
	Environment                  map[string]interface{} `json:"environment"`
	Name                         *string                `json:"name"`
	Script                       *string                `json:"script"`
	ScriptRepository             map[string]interface{} `json:"script_repository"`
}

type EnterpriseAdminUpdatePreReceiveHookRequest struct {
	PathParams EnterpriseAdminUpdatePreReceiveHookPathParams
	Request    *EnterpriseAdminUpdatePreReceiveHookRequestBody `request:"mediaType=application/json"`
}

type EnterpriseAdminUpdatePreReceiveHookResponse struct {
	ContentType    string
	StatusCode     int64
	PreReceiveHook *shared.PreReceiveHook
}
