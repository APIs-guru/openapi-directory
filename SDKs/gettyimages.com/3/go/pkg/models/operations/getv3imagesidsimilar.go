package operations

import (
	"openapi/pkg/models/shared"
)

type GetV3ImagesIDSimilarPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetV3ImagesIDSimilarQueryParams struct {
	Fields   []shared.ImagesFieldValuesEnum `queryParam:"style=form,explode=false,name=fields"`
	Page     *int32                         `queryParam:"style=form,explode=true,name=page"`
	PageSize *int32                         `queryParam:"style=form,explode=true,name=page_size"`
}

type GetV3ImagesIDSimilarHeaders struct {
	AcceptLanguage *string `header:"style=simple,explode=false,name=Accept-Language"`
}

type GetV3ImagesIDSimilarRequest struct {
	PathParams  GetV3ImagesIDSimilarPathParams
	QueryParams GetV3ImagesIDSimilarQueryParams
	Headers     GetV3ImagesIDSimilarHeaders
}

type GetV3ImagesIDSimilarResponse struct {
	ContentType                  string
	ImageSearchItemSearchResults *shared.ImageSearchItemSearchResults
	StatusCode                   int64
}
