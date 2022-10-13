package operations

import (
	"openapi/pkg/models/shared"
)

type PostVideosVideoIDSourcePathParams struct {
	VideoID string `pathParam:"style=simple,explode=false,name=videoId"`
}

type PostVideosVideoIDSourceHeaders struct {
	ContentRange *string `header:"style=simple,explode=false,name=Content-Range"`
}

type PostVideosVideoIDSourceSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type PostVideosVideoIDSourceRequest struct {
	PathParams PostVideosVideoIDSourcePathParams
	Headers    PostVideosVideoIDSourceHeaders
	Request    *shared.VideoUploadPayload `request:"mediaType=multipart/form-data"`
	Security   PostVideosVideoIDSourceSecurity
}

type PostVideosVideoIDSourceResponse struct {
	ContentType string
	StatusCode  int64
	BadRequest  *shared.BadRequest
	NotFound    *shared.NotFound
	Video       *shared.Video
}
