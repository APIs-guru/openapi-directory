package operations

import (
	"openapi/pkg/models/shared"
)

type GetV3SearchVideosCreativeByImageQueryParams struct {
	AssetID       *string                                    `queryParam:"style=form,explode=true,name=asset_id"`
	FacetFields   []shared.CreateVideoSearchFacetsFieldsEnum `queryParam:"style=form,explode=false,name=facet_fields"`
	FacetMaxCount *int32                                     `queryParam:"style=form,explode=true,name=facet_max_count"`
	Fields        []shared.CreativeVideosFieldValuesEnum     `queryParam:"style=form,explode=false,name=fields"`
	ImageURL      *string                                    `queryParam:"style=form,explode=true,name=image_url"`
	IncludeFacets *bool                                      `queryParam:"style=form,explode=true,name=include_facets"`
	Page          *int32                                     `queryParam:"style=form,explode=true,name=page"`
	PageSize      *int32                                     `queryParam:"style=form,explode=true,name=page_size"`
	ProductTypes  []string                                   `queryParam:"style=form,explode=false,name=product_types"`
}

type GetV3SearchVideosCreativeByImageHeaders struct {
	AcceptLanguage *string `header:"name=Accept-Language"`
	GiCountryCode  *string `header:"name=GI-Country-Code"`
}

type GetV3SearchVideosCreativeByImageRequest struct {
	QueryParams GetV3SearchVideosCreativeByImageQueryParams
	Headers     GetV3SearchVideosCreativeByImageHeaders
}

type GetV3SearchVideosCreativeByImageResponse struct {
	ContentType                string
	CreativeVideoSearchResults *shared.CreativeVideoSearchResults
	StatusCode                 int64
}
