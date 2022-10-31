package operations

import (
	"openapi/pkg/models/shared"
)

type GetV3SearchImagesCreativeByImageQueryParams struct {
	AssetID          *string                                    `queryParam:"style=form,explode=true,name=asset_id"`
	FacetFields      []shared.CreateImageSearchFacetsFieldsEnum `queryParam:"style=form,explode=false,name=facet_fields"`
	FacetMaxCount    *int32                                     `queryParam:"style=form,explode=true,name=facet_max_count"`
	Fields           []shared.CreativeImagesFieldValuesEnum     `queryParam:"style=form,explode=false,name=fields"`
	ImageFingerprint *string                                    `queryParam:"style=form,explode=true,name=image_fingerprint"`
	ImageURL         *string                                    `queryParam:"style=form,explode=true,name=image_url"`
	IncludeFacets    *bool                                      `queryParam:"style=form,explode=true,name=include_facets"`
	Page             *int32                                     `queryParam:"style=form,explode=true,name=page"`
	PageSize         *int32                                     `queryParam:"style=form,explode=true,name=page_size"`
	ProductTypes     []string                                   `queryParam:"style=form,explode=false,name=product_types"`
}

type GetV3SearchImagesCreativeByImageHeaders struct {
	AcceptLanguage *string `header:"style=simple,explode=false,name=Accept-Language"`
	GiCountryCode  *string `header:"style=simple,explode=false,name=GI-Country-Code"`
}

type GetV3SearchImagesCreativeByImageRequest struct {
	QueryParams GetV3SearchImagesCreativeByImageQueryParams
	Headers     GetV3SearchImagesCreativeByImageHeaders
}

type GetV3SearchImagesCreativeByImageResponse struct {
	ContentType                  string
	SearchByImageResourceResults *shared.SearchByImageResourceResults
	StatusCode                   int64
}
