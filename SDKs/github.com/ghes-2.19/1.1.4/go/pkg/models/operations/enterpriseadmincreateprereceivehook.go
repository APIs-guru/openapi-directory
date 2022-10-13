package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminCreatePreReceiveHookRequestBody struct {
	AllowDownstreamConfiguration *bool                  `json:"allow_downstream_configuration"`
	Enforcement                  *string                `json:"enforcement"`
	Environment                  map[string]interface{} `json:"environment"`
	Name                         string                 `json:"name"`
	Script                       string                 `json:"script"`
	ScriptRepository             map[string]interface{} `json:"script_repository"`
}

type EnterpriseAdminCreatePreReceiveHookRequest struct {
	Request *EnterpriseAdminCreatePreReceiveHookRequestBody `request:"mediaType=application/json"`
}

type EnterpriseAdminCreatePreReceiveHookResponse struct {
	ContentType    string
	StatusCode     int64
	PreReceiveHook *shared.PreReceiveHook
}
