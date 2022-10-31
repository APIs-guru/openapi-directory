package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateArtifactStatePathParams struct {
	ArtifactID string `pathParam:"style=simple,explode=false,name=artifactId"`
}

type UpdateArtifactStateRequest struct {
	PathParams UpdateArtifactStatePathParams
	Request    shared.UpdateState `request:"mediaType=application/json"`
}

type UpdateArtifactStateResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
