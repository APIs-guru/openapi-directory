package operations

import (
	"openapi/pkg/models/shared"
)

type ActionsSetGithubActionsPermissionsOrganizationPathParams struct {
	Org string `pathParam:"style=simple,explode=false,name=org"`
}

type ActionsSetGithubActionsPermissionsOrganizationRequestBody struct {
	AllowedActions      *shared.AllowedActionsEnum     `json:"allowed_actions,omitempty"`
	EnabledRepositories shared.EnabledRepositoriesEnum `json:"enabled_repositories"`
}

type ActionsSetGithubActionsPermissionsOrganizationRequest struct {
	PathParams ActionsSetGithubActionsPermissionsOrganizationPathParams
	Request    *ActionsSetGithubActionsPermissionsOrganizationRequestBody `request:"mediaType=application/json"`
}

type ActionsSetGithubActionsPermissionsOrganizationResponse struct {
	ContentType string
	StatusCode  int64
}
