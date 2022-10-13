package operations

import (
	"openapi/pkg/models/shared"
)

type PatchLiveStreamsLiveStreamIDPathParams struct {
	LiveStreamID string `pathParam:"style=simple,explode=false,name=liveStreamId"`
}

type PatchLiveStreamsLiveStreamIDSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type PatchLiveStreamsLiveStreamIDRequest struct {
	PathParams PatchLiveStreamsLiveStreamIDPathParams
	Request    *shared.LiveStreamUpdatePayload `request:"mediaType=application/json"`
	Security   PatchLiveStreamsLiveStreamIDSecurity
}

type PatchLiveStreamsLiveStreamIDResponse struct {
	ContentType string
	StatusCode  int64
	BadRequest  *shared.BadRequest
	LiveStream  *shared.LiveStream
}
