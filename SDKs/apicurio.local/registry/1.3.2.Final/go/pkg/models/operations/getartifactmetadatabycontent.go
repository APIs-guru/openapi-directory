package operations

import (
	"openapi/pkg/models/shared"
)

type GetArtifactMetaDataByContentPathParams struct {
	ArtifactID string `pathParam:"style=simple,explode=false,name=artifactId"`
}

type GetArtifactMetaDataByContentRequest struct {
	PathParams GetArtifactMetaDataByContentPathParams
	Request    []byte `request:"mediaType=application/json"`
}

type GetArtifactMetaDataByContentResponse struct {
	ArtifactMetaData *shared.ArtifactMetaData
	ContentType      string
	Error            *shared.Error
	StatusCode       int64
}
