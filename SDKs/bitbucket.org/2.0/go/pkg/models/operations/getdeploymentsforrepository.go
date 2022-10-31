package operations

import (
	"openapi/pkg/models/shared"
)

type GetDeploymentsForRepositoryPathParams struct {
	RepoSlug  string `pathParam:"style=simple,explode=false,name=repo_slug"`
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetDeploymentsForRepositoryRequest struct {
	PathParams GetDeploymentsForRepositoryPathParams
}

type GetDeploymentsForRepositoryResponse struct {
	ContentType          string
	StatusCode           int64
	PaginatedDeployments *shared.PaginatedDeployments
}
