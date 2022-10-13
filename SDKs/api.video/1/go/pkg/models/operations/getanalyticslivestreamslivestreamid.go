package operations

import (
	"openapi/pkg/models/shared"
)

type GetAnalyticsLiveStreamsLiveStreamIDPathParams struct {
	LiveStreamID string `pathParam:"style=simple,explode=false,name=liveStreamId"`
}

type GetAnalyticsLiveStreamsLiveStreamIDQueryParams struct {
	CurrentPage *int64  `queryParam:"style=form,explode=true,name=currentPage"`
	PageSize    *int64  `queryParam:"style=form,explode=true,name=pageSize"`
	Period      *string `queryParam:"style=form,explode=true,name=period"`
}

type GetAnalyticsLiveStreamsLiveStreamIDSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetAnalyticsLiveStreamsLiveStreamIDRequest struct {
	PathParams  GetAnalyticsLiveStreamsLiveStreamIDPathParams
	QueryParams GetAnalyticsLiveStreamsLiveStreamIDQueryParams
	Security    GetAnalyticsLiveStreamsLiveStreamIDSecurity
}

type GetAnalyticsLiveStreamsLiveStreamIDResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	NotFound                                     *shared.NotFound
	RawStatisticsListLiveStreamAnalyticsResponse *shared.RawStatisticsListLiveStreamAnalyticsResponse
}
