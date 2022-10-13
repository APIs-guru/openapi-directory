package operations

import (
	"openapi/pkg/models/shared"
)

type PostLiveStreamsLiveStreamIDThumbnailPathParams struct {
	LiveStreamID string `pathParam:"style=simple,explode=false,name=liveStreamId"`
}

type PostLiveStreamsLiveStreamIDThumbnailSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type PostLiveStreamsLiveStreamIDThumbnailRequest struct {
	PathParams PostLiveStreamsLiveStreamIDThumbnailPathParams
	Request    *shared.LiveStreamThumbnailUploadPayload `request:"mediaType=multipart/form-data"`
	Security   PostLiveStreamsLiveStreamIDThumbnailSecurity
}

type PostLiveStreamsLiveStreamIDThumbnailResponse struct {
	ContentType string
	StatusCode  int64
	BadRequest  *shared.BadRequest
	LiveStream  *shared.LiveStream
	NotFound    *shared.NotFound
}
