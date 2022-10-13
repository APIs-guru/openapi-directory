package operations

import (
	"openapi/pkg/models/shared"
)

type GetVideosVideoIDCaptionsPathParams struct {
	VideoID string `pathParam:"style=simple,explode=false,name=videoId"`
}

type GetVideosVideoIDCaptionsQueryParams struct {
	CurrentPage *int64 `queryParam:"style=form,explode=true,name=currentPage"`
	PageSize    *int64 `queryParam:"style=form,explode=true,name=pageSize"`
}

type GetVideosVideoIDCaptionsSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetVideosVideoIDCaptionsRequest struct {
	PathParams  GetVideosVideoIDCaptionsPathParams
	QueryParams GetVideosVideoIDCaptionsQueryParams
	Security    GetVideosVideoIDCaptionsSecurity
}

type GetVideosVideoIDCaptionsResponse struct {
	ContentType          string
	StatusCode           int64
	CaptionsListResponse *shared.CaptionsListResponse
	NotFound             *shared.NotFound
}
