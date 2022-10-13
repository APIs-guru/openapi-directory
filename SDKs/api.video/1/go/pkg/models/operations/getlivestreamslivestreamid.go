package operations

import (
	"openapi/pkg/models/shared"
)

type GetLiveStreamsLiveStreamIDPathParams struct {
	LiveStreamID string `pathParam:"style=simple,explode=false,name=liveStreamId"`
}

type GetLiveStreamsLiveStreamIDSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetLiveStreamsLiveStreamIDRequest struct {
	PathParams GetLiveStreamsLiveStreamIDPathParams
	Security   GetLiveStreamsLiveStreamIDSecurity
}

type GetLiveStreamsLiveStreamIDResponse struct {
	ContentType string
	StatusCode  int64
	LiveStream  *shared.LiveStream
}
