package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminSetGithubActionsPermissionsEnterprisePathParams struct {
	Enterprise string `pathParam:"style=simple,explode=false,name=enterprise"`
}

type EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequestBody struct {
	AllowedActions       *shared.AllowedActionsEnum      `json:"allowed_actions,omitempty"`
	EnabledOrganizations shared.EnabledOrganizationsEnum `json:"enabled_organizations"`
}

type EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequest struct {
	PathParams EnterpriseAdminSetGithubActionsPermissionsEnterprisePathParams
	Request    *EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequestBody `request:"mediaType=application/json"`
}

type EnterpriseAdminSetGithubActionsPermissionsEnterpriseResponse struct {
	ContentType string
	StatusCode  int64
}
