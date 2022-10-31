package operations

import (
	"openapi/pkg/models/shared"
)

type GetProjectUsernameProjectBuildNumArtifactsPathParams struct {
	BuildNum int64  `pathParam:"style=simple,explode=false,name=build_num"`
	Project  string `pathParam:"style=simple,explode=false,name=project"`
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type GetProjectUsernameProjectBuildNumArtifactsRequest struct {
	PathParams GetProjectUsernameProjectBuildNumArtifactsPathParams
}

type GetProjectUsernameProjectBuildNumArtifactsResponse struct {
	Artifacts   []shared.Artifact
	ContentType string
	StatusCode  int64
}
