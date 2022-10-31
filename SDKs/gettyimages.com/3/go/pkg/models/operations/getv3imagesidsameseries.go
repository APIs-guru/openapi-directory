package operations

import (
	"openapi/pkg/models/shared"
)

type GetV3ImagesIDSameSeriesPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetV3ImagesIDSameSeriesQueryParams struct {
	Fields   []shared.ImagesFieldValuesEnum `queryParam:"style=form,explode=false,name=fields"`
	Page     *int32                         `queryParam:"style=form,explode=true,name=page"`
	PageSize *int32                         `queryParam:"style=form,explode=true,name=page_size"`
}

type GetV3ImagesIDSameSeriesHeaders struct {
	AcceptLanguage *string `header:"style=simple,explode=false,name=Accept-Language"`
}

type GetV3ImagesIDSameSeriesRequest struct {
	PathParams  GetV3ImagesIDSameSeriesPathParams
	QueryParams GetV3ImagesIDSameSeriesQueryParams
	Headers     GetV3ImagesIDSameSeriesHeaders
}

type GetV3ImagesIDSameSeriesResponse struct {
	ContentType                  string
	ImageSearchItemSearchResults *shared.ImageSearchItemSearchResults
	StatusCode                   int64
}
