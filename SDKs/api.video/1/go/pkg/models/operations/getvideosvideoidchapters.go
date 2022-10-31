package operations

import (
	"openapi/pkg/models/shared"
)

type GetVideosVideoIDChaptersPathParams struct {
	VideoID string `pathParam:"style=simple,explode=false,name=videoId"`
}

type GetVideosVideoIDChaptersQueryParams struct {
	CurrentPage *int64 `queryParam:"style=form,explode=true,name=currentPage"`
	PageSize    *int64 `queryParam:"style=form,explode=true,name=pageSize"`
}

type GetVideosVideoIDChaptersSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetVideosVideoIDChaptersRequest struct {
	PathParams  GetVideosVideoIDChaptersPathParams
	QueryParams GetVideosVideoIDChaptersQueryParams
	Security    GetVideosVideoIDChaptersSecurity
}

type GetVideosVideoIDChaptersResponse struct {
	ContentType          string
	StatusCode           int64
	ChaptersListResponse *shared.ChaptersListResponse
	NotFound             *shared.NotFound
}
