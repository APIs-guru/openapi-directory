package operations

import (
	"openapi/pkg/models/shared"
)

type GetV3VideosIDSimilarPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetV3VideosIDSimilarQueryParams struct {
	Fields   []shared.BlendedVideosFieldValuesEnum `queryParam:"style=form,explode=false,name=fields"`
	Page     *int32                                `queryParam:"style=form,explode=true,name=page"`
	PageSize *int32                                `queryParam:"style=form,explode=true,name=page_size"`
}

type GetV3VideosIDSimilarHeaders struct {
	AcceptLanguage *string `header:"style=simple,explode=false,name=Accept-Language"`
}

type GetV3VideosIDSimilarRequest struct {
	PathParams  GetV3VideosIDSimilarPathParams
	QueryParams GetV3VideosIDSimilarQueryParams
	Headers     GetV3VideosIDSimilarHeaders
}

type GetV3VideosIDSimilarResponse struct {
	ContentType string
	StatusCode  int64
}
