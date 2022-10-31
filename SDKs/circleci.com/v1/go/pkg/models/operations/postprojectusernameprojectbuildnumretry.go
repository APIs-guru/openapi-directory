package operations

import (
	"openapi/pkg/models/shared"
)

type PostProjectUsernameProjectBuildNumRetryPathParams struct {
	BuildNum int64  `pathParam:"style=simple,explode=false,name=build_num"`
	Project  string `pathParam:"style=simple,explode=false,name=project"`
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type PostProjectUsernameProjectBuildNumRetryRequest struct {
	PathParams PostProjectUsernameProjectBuildNumRetryPathParams
}

type PostProjectUsernameProjectBuildNumRetryResponse struct {
	Build       *shared.Build
	ContentType string
	StatusCode  int64
}
