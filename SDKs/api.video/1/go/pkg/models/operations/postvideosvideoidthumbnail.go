package operations

import (
	"openapi/pkg/models/shared"
)

type PostVideosVideoIDThumbnailPathParams struct {
	VideoID string `pathParam:"style=simple,explode=false,name=videoId"`
}

type PostVideosVideoIDThumbnailSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type PostVideosVideoIDThumbnailRequest struct {
	PathParams PostVideosVideoIDThumbnailPathParams
	Request    *shared.VideoThumbnailUploadPayload `request:"mediaType=multipart/form-data"`
	Security   PostVideosVideoIDThumbnailSecurity
}

type PostVideosVideoIDThumbnailResponse struct {
	ContentType string
	StatusCode  int64
	BadRequest  *shared.BadRequest
	NotFound    *shared.NotFound
	Video       *shared.Video
}
