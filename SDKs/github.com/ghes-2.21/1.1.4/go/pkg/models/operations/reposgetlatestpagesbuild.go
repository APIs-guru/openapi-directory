package operations

import (
	"openapi/pkg/models/shared"
)

type ReposGetLatestPagesBuildPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposGetLatestPagesBuildRequest struct {
	PathParams ReposGetLatestPagesBuildPathParams
}

type ReposGetLatestPagesBuildResponse struct {
	ContentType string
	StatusCode  int64
	PageBuild   *shared.PageBuild
}
