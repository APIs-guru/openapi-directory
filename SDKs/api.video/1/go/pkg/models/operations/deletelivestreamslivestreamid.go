package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteLiveStreamsLiveStreamIDPathParams struct {
	LiveStreamID string `pathParam:"style=simple,explode=false,name=liveStreamId"`
}

type DeleteLiveStreamsLiveStreamIDSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type DeleteLiveStreamsLiveStreamIDRequest struct {
	PathParams DeleteLiveStreamsLiveStreamIDPathParams
	Security   DeleteLiveStreamsLiveStreamIDSecurity
}

type DeleteLiveStreamsLiveStreamIDResponse struct {
	ContentType string
	StatusCode  int64
}
