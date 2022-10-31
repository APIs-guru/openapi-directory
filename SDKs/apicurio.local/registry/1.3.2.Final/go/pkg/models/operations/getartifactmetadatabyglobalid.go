package operations

import (
	"openapi/pkg/models/shared"
)

type GetArtifactMetaDataByGlobalIDPathParams struct {
	GlobalID int64 `pathParam:"style=simple,explode=false,name=globalId"`
}

type GetArtifactMetaDataByGlobalIDRequest struct {
	PathParams GetArtifactMetaDataByGlobalIDPathParams
}

type GetArtifactMetaDataByGlobalIDResponse struct {
	ArtifactMetaData *shared.ArtifactMetaData
	ContentType      string
	Error            *shared.Error
	StatusCode       int64
}
