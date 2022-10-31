package operations

import (
	"openapi/pkg/models/shared"
)

type GetV3SearchImagesCreativeQueryParams struct {
	AgeOfPeople               []shared.AgeOfPeopleFilterTypeEnum         `queryParam:"style=form,explode=false,name=age_of_people"`
	Artists                   *string                                    `queryParam:"style=form,explode=true,name=artists"`
	CollectionCodes           []string                                   `queryParam:"style=form,explode=false,name=collection_codes"`
	CollectionsFilterType     *shared.CollectionsFilterTypeEnum          `queryParam:"style=form,explode=true,name=collections_filter_type"`
	Color                     *string                                    `queryParam:"style=form,explode=true,name=color"`
	Compositions              []shared.CompositionsFilterTypeEnum        `queryParam:"style=form,explode=false,name=compositions"`
	DownloadProduct           *string                                    `queryParam:"style=form,explode=true,name=download_product"`
	EmbedContentOnly          *bool                                      `queryParam:"style=form,explode=true,name=embed_content_only"`
	Ethnicity                 []shared.EthnicityFilterTypeEnum           `queryParam:"style=form,explode=false,name=ethnicity"`
	ExcludeEditorialUseOnly   *bool                                      `queryParam:"style=form,explode=true,name=exclude_editorial_use_only"`
	ExcludeNudity             *bool                                      `queryParam:"style=form,explode=true,name=exclude_nudity"`
	FacetFields               []shared.CreateImageSearchFacetsFieldsEnum `queryParam:"style=form,explode=false,name=facet_fields"`
	FacetMaxCount             *int32                                     `queryParam:"style=form,explode=true,name=facet_max_count"`
	Fields                    []shared.CreativeImagesFieldValuesEnum     `queryParam:"style=form,explode=false,name=fields"`
	FileTypes                 []shared.SearchFileTypeEnum                `queryParam:"style=form,explode=false,name=file_types"`
	GraphicalStyles           []shared.GraphicalStyleEnum                `queryParam:"style=form,explode=false,name=graphical_styles"`
	GraphicalStylesFilterType *shared.GraphicalStylesFilterTypeEnum      `queryParam:"style=form,explode=true,name=graphical_styles_filter_type"`
	IncludeFacets             *bool                                      `queryParam:"style=form,explode=true,name=include_facets"`
	IncludeRelatedSearches    *bool                                      `queryParam:"style=form,explode=true,name=include_related_searches"`
	KeywordIds                []int32                                    `queryParam:"style=form,explode=false,name=keyword_ids"`
	MinimumSize               *shared.TeeShirtSizeEnum                   `queryParam:"style=form,explode=true,name=minimum_size"`
	NumberOfPeople            []shared.NumberOfPeopleFilterTypeEnum      `queryParam:"style=form,explode=false,name=number_of_people"`
	Orientations              []shared.OrientationRequestEnum            `queryParam:"style=form,explode=false,name=orientations"`
	Page                      *int32                                     `queryParam:"style=form,explode=true,name=page"`
	PageSize                  *int32                                     `queryParam:"style=form,explode=true,name=page_size"`
	Phrase                    *string                                    `queryParam:"style=form,explode=true,name=phrase"`
	SafeSearch                *bool                                      `queryParam:"style=form,explode=true,name=safe_search"`
	SortOrder                 *shared.CreativeImageSortOrderEnum         `queryParam:"style=form,explode=true,name=sort_order"`
}

type GetV3SearchImagesCreativeHeaders struct {
	AcceptLanguage *string `header:"style=simple,explode=false,name=Accept-Language"`
	GiCountryCode  *string `header:"style=simple,explode=false,name=GI-Country-Code"`
}

type GetV3SearchImagesCreativeRequest struct {
	QueryParams GetV3SearchImagesCreativeQueryParams
	Headers     GetV3SearchImagesCreativeHeaders
}

type GetV3SearchImagesCreativeResponse struct {
	ContentType                string
	CreativeImageSearchResults *shared.CreativeImageSearchResults
	StatusCode                 int64
}
