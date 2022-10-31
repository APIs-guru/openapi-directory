package operations

import (
	"openapi/pkg/models/shared"
)

type GetV3ArtistsImagesQueryParams struct {
	ArtistName *string                                    `queryParam:"style=form,explode=true,name=artist_name"`
	Fields     []shared.ArtistsImageSearchFieldValuesEnum `queryParam:"style=form,explode=false,name=fields"`
	Page       *int32                                     `queryParam:"style=form,explode=true,name=page"`
	PageSize   *int32                                     `queryParam:"style=form,explode=true,name=page_size"`
}

type GetV3ArtistsImagesHeaders struct {
	AcceptLanguage *string `header:"style=simple,explode=false,name=Accept-Language"`
}

type GetV3ArtistsImagesRequest struct {
	QueryParams GetV3ArtistsImagesQueryParams
	Headers     GetV3ArtistsImagesHeaders
}

type GetV3ArtistsImagesResponse struct {
	ContentType string
	StatusCode  int64
}
