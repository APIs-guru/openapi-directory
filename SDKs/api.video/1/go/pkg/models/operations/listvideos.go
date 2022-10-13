package operations

import (
	"openapi/pkg/models/shared"
)

type ListVideosQueryParams struct {
	CurrentPage  *int64   `queryParam:"style=form,explode=true,name=currentPage"`
	Description  *string  `queryParam:"style=form,explode=true,name=description"`
	LiveStreamID *string  `queryParam:"style=form,explode=true,name=liveStreamId"`
	Metadata     []string `queryParam:"style=form,explode=true,name=metadata"`
	PageSize     *int64   `queryParam:"style=form,explode=true,name=pageSize"`
	SortBy       *string  `queryParam:"style=form,explode=true,name=sortBy"`
	SortOrder    *string  `queryParam:"style=form,explode=true,name=sortOrder"`
	Tags         []string `queryParam:"style=form,explode=true,name=tags"`
	Title        *string  `queryParam:"style=form,explode=true,name=title"`
}

type ListVideosSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type ListVideosRequest struct {
	QueryParams ListVideosQueryParams
	Security    ListVideosSecurity
}

type ListVideosResponse struct {
	ContentType        string
	StatusCode         int64
	BadRequest         *shared.BadRequest
	VideosListResponse *shared.VideosListResponse
}
