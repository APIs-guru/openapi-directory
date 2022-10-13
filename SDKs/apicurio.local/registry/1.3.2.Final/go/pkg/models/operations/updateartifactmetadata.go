package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateArtifactMetaDataPathParams struct {
	ArtifactID string `pathParam:"style=simple,explode=false,name=artifactId"`
}

type UpdateArtifactMetaDataRequest struct {
	PathParams UpdateArtifactMetaDataPathParams
	Request    []byte `request:"mediaType=*/*"`
}

type UpdateArtifactMetaDataResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
