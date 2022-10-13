package operations

import (
	"openapi/pkg/models/shared"
)

type GetProjectUsernameProjectBuildNumTestsPathParams struct {
	BuildNum int64  `pathParam:"style=simple,explode=false,name=build_num"`
	Project  string `pathParam:"style=simple,explode=false,name=project"`
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type GetProjectUsernameProjectBuildNumTestsRequest struct {
	PathParams GetProjectUsernameProjectBuildNumTestsPathParams
}

type GetProjectUsernameProjectBuildNumTestsResponse struct {
	ContentType string
	StatusCode  int64
	Tests       *shared.Tests
}
