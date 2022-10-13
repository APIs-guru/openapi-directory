package operations

import (
	"openapi/pkg/models/shared"
)

type GetV3AffiliatesSearchImagesQueryParams struct {
	Phrase *string                          `queryParam:"style=form,explode=true,name=phrase"`
	Style  *shared.AffiliateSearchStyleEnum `queryParam:"style=form,explode=true,name=style"`
}

type GetV3AffiliatesSearchImagesHeaders struct {
	AcceptLanguage *string `header:"name=Accept-Language"`
}

type GetV3AffiliatesSearchImagesRequest struct {
	QueryParams GetV3AffiliatesSearchImagesQueryParams
	Headers     GetV3AffiliatesSearchImagesHeaders
}

type GetV3AffiliatesSearchImagesResponse struct {
	AffiliateImageSearchResponse *shared.AffiliateImageSearchResponse
	ContentType                  string
	StatusCode                   int64
}
