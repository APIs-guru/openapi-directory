package operations

import (
	"openapi/pkg/models/shared"
)

type PatchVideosVideoIDThumbnailPathParams struct {
	VideoID string `pathParam:"style=simple,explode=false,name=videoId"`
}

type PatchVideosVideoIDThumbnailSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type PatchVideosVideoIDThumbnailRequest struct {
	PathParams PatchVideosVideoIDThumbnailPathParams
	Request    *shared.VideoThumbnailPickPayload `request:"mediaType=application/json"`
	Security   PatchVideosVideoIDThumbnailSecurity
}

type PatchVideosVideoIDThumbnailResponse struct {
	ContentType string
	StatusCode  int64
	NotFound    *shared.NotFound
	Video       *shared.Video
}
