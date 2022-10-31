package operations

import (
	"openapi/pkg/models/shared"
)

type ActionsGetArtifactPathParams struct {
	ArtifactID int64  `pathParam:"style=simple,explode=false,name=artifact_id"`
	Owner      string `pathParam:"style=simple,explode=false,name=owner"`
	Repo       string `pathParam:"style=simple,explode=false,name=repo"`
}

type ActionsGetArtifactRequest struct {
	PathParams ActionsGetArtifactPathParams
}

type ActionsGetArtifactResponse struct {
	ContentType string
	StatusCode  int64
	Artifact    *shared.Artifact
}
