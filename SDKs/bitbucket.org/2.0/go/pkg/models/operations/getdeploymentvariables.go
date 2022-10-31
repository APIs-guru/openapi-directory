package operations

import (
	"openapi/pkg/models/shared"
)

type GetDeploymentVariablesPathParams struct {
	EnvironmentUUID string `pathParam:"style=simple,explode=false,name=environment_uuid"`
	RepoSlug        string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace       string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetDeploymentVariablesRequest struct {
	PathParams GetDeploymentVariablesPathParams
}

type GetDeploymentVariablesResponse struct {
	ContentType                 string
	StatusCode                  int64
	PaginatedDeploymentVariable *shared.PaginatedDeploymentVariable
}
