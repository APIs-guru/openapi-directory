package operations

import (
	"openapi/pkg/models/shared"
)

type ActionsGetGithubActionsPermissionsOrganizationPathParams struct {
	Org string `pathParam:"style=simple,explode=false,name=org"`
}

type ActionsGetGithubActionsPermissionsOrganizationRequest struct {
	PathParams ActionsGetGithubActionsPermissionsOrganizationPathParams
}

type ActionsGetGithubActionsPermissionsOrganizationResponse struct {
	ContentType                    string
	StatusCode                     int64
	ActionsOrganizationPermissions *shared.ActionsOrganizationPermissions
}
