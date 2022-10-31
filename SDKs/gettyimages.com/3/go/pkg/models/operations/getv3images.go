package operations

import (
	"openapi/pkg/models/shared"
)

type GetV3ImagesQueryParams struct {
	Fields []shared.ImageDetailFieldValuesEnum `queryParam:"style=form,explode=false,name=fields"`
	Ids    []string                            `queryParam:"style=form,explode=false,name=ids"`
}

type GetV3ImagesHeaders struct {
	AcceptLanguage *string `header:"style=simple,explode=false,name=Accept-Language"`
}

type GetV3ImagesRequest struct {
	QueryParams GetV3ImagesQueryParams
	Headers     GetV3ImagesHeaders
}

type GetV3ImagesResponse struct {
	ContentType         string
	ImagesDetailResults *shared.ImagesDetailResults
	StatusCode          int64
}
