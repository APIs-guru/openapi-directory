package operations

import (
	"openapi/pkg/models/shared"
)

type ReposRequestPagesBuildPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposRequestPagesBuildRequest struct {
	PathParams ReposRequestPagesBuildPathParams
}

type ReposRequestPagesBuildResponse struct {
	ContentType     string
	StatusCode      int64
	PageBuildStatus *shared.PageBuildStatus
}
