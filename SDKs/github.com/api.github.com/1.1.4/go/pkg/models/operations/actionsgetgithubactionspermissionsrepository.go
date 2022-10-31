package operations

import (
	"openapi/pkg/models/shared"
)

type ActionsGetGithubActionsPermissionsRepositoryPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ActionsGetGithubActionsPermissionsRepositoryRequest struct {
	PathParams ActionsGetGithubActionsPermissionsRepositoryPathParams
}

type ActionsGetGithubActionsPermissionsRepositoryResponse struct {
	ContentType                  string
	StatusCode                   int64
	ActionsRepositoryPermissions *shared.ActionsRepositoryPermissions
}
