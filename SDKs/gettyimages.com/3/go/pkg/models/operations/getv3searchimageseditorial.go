package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetV3SearchImagesEditorialQueryParams struct {
	AgeOfPeople               []shared.AgeOfPeopleFilterTypeEnum            `queryParam:"style=form,explode=false,name=age_of_people"`
	Artists                   *string                                       `queryParam:"style=form,explode=true,name=artists"`
	CollectionCodes           []string                                      `queryParam:"style=form,explode=false,name=collection_codes"`
	CollectionsFilterType     *shared.CollectionsFilterTypeEnum             `queryParam:"style=form,explode=true,name=collections_filter_type"`
	Compositions              []shared.CompositionsFilterTypeEnum           `queryParam:"style=form,explode=false,name=compositions"`
	DateFrom                  *time.Time                                    `queryParam:"style=form,explode=true,name=date_from"`
	DateTo                    *time.Time                                    `queryParam:"style=form,explode=true,name=date_to"`
	DownloadProduct           *string                                       `queryParam:"style=form,explode=true,name=download_product"`
	EditorialSegments         []shared.EditorialSegmentContractEnum         `queryParam:"style=form,explode=false,name=editorial_segments"`
	EmbedContentOnly          *bool                                         `queryParam:"style=form,explode=true,name=embed_content_only"`
	EntityUris                []string                                      `queryParam:"style=form,explode=false,name=entity_uris"`
	Ethnicity                 []shared.EthnicityFilterTypeEnum              `queryParam:"style=form,explode=false,name=ethnicity"`
	EventIds                  []int32                                       `queryParam:"style=form,explode=false,name=event_ids"`
	FacetFields               []shared.EditorialImageSearchFacetsFieldsEnum `queryParam:"style=form,explode=false,name=facet_fields"`
	FacetMaxCount             *int32                                        `queryParam:"style=form,explode=true,name=facet_max_count"`
	Fields                    []shared.EditorialImagesFieldValuesEnum       `queryParam:"style=form,explode=false,name=fields"`
	FileTypes                 []shared.SearchFileTypeEnum                   `queryParam:"style=form,explode=false,name=file_types"`
	GraphicalStyles           []shared.EditorialGraphicalStyleEnum          `queryParam:"style=form,explode=false,name=graphical_styles"`
	GraphicalStylesFilterType *shared.GraphicalStylesFilterTypeEnum         `queryParam:"style=form,explode=true,name=graphical_styles_filter_type"`
	IncludeFacets             *bool                                         `queryParam:"style=form,explode=true,name=include_facets"`
	IncludeRelatedSearches    *bool                                         `queryParam:"style=form,explode=true,name=include_related_searches"`
	KeywordIds                []int32                                       `queryParam:"style=form,explode=false,name=keyword_ids"`
	MinimumQualityRank        *int32                                        `queryParam:"style=form,explode=true,name=minimum_quality_rank"`
	MinimumSize               *shared.TeeShirtSizeEnum                      `queryParam:"style=form,explode=true,name=minimum_size"`
	NumberOfPeople            []shared.NumberOfPeopleFilterTypeEnum         `queryParam:"style=form,explode=false,name=number_of_people"`
	Orientations              []shared.OrientationRequestEnum               `queryParam:"style=form,explode=false,name=orientations"`
	Page                      *int32                                        `queryParam:"style=form,explode=true,name=page"`
	PageSize                  *int32                                        `queryParam:"style=form,explode=true,name=page_size"`
	Phrase                    *string                                       `queryParam:"style=form,explode=true,name=phrase"`
	SortOrder                 *shared.SortOrderEnum                         `queryParam:"style=form,explode=true,name=sort_order"`
	SpecificPeople            []string                                      `queryParam:"style=form,explode=false,name=specific_people"`
}

type GetV3SearchImagesEditorialHeaders struct {
	AcceptLanguage *string `header:"style=simple,explode=false,name=Accept-Language"`
	GiCountryCode  *string `header:"style=simple,explode=false,name=GI-Country-Code"`
}

type GetV3SearchImagesEditorialRequest struct {
	QueryParams GetV3SearchImagesEditorialQueryParams
	Headers     GetV3SearchImagesEditorialHeaders
}

type GetV3SearchImagesEditorialResponse struct {
	ContentType                 string
	EditorialImageSearchResults *shared.EditorialImageSearchResults
	StatusCode                  int64
}
