package operations

import (
	"openapi/pkg/models/shared"
)

type GetV3SearchVideosEditorialQueryParams struct {
	AgeOfPeople            []shared.AgeOfPeopleFilterTypeEnum            `queryParam:"style=form,explode=false,name=age_of_people"`
	Artists                *string                                       `queryParam:"style=form,explode=true,name=artists"`
	AspectRatios           []shared.VideoAspectRatioFilterTypeEnum       `queryParam:"style=form,explode=false,name=aspect_ratios"`
	CollectionCodes        []string                                      `queryParam:"style=form,explode=false,name=collection_codes"`
	CollectionsFilterType  *shared.CollectionsFilterTypeEnum             `queryParam:"style=form,explode=true,name=collections_filter_type"`
	Compositions           []shared.CompositionsFilterTypeEnum           `queryParam:"style=form,explode=false,name=compositions"`
	DownloadProduct        *string                                       `queryParam:"style=form,explode=true,name=download_product"`
	EditorialVideoTypes    []shared.EditorialVideoTypeEnum               `queryParam:"style=form,explode=false,name=editorial_video_types"`
	EntityUris             []string                                      `queryParam:"style=form,explode=false,name=entity_uris"`
	FacetFields            []shared.EditorialVideoSearchFacetsFieldsEnum `queryParam:"style=form,explode=false,name=facet_fields"`
	FacetMaxCount          *int32                                        `queryParam:"style=form,explode=true,name=facet_max_count"`
	Fields                 []shared.EditorialVideosFieldValuesEnum       `queryParam:"style=form,explode=false,name=fields"`
	FormatAvailable        *shared.VideoFormatsRequestEnum               `queryParam:"style=form,explode=true,name=format_available"`
	FrameRates             []shared.VideoFrameRatesEnum                  `queryParam:"style=form,explode=false,name=frame_rates"`
	ImageTechniques        []shared.ImageTechniquesFilterTypeEnum        `queryParam:"style=form,explode=false,name=image_techniques"`
	IncludeFacets          *bool                                         `queryParam:"style=form,explode=true,name=include_facets"`
	IncludeRelatedSearches *bool                                         `queryParam:"style=form,explode=true,name=include_related_searches"`
	KeywordIds             []int32                                       `queryParam:"style=form,explode=false,name=keyword_ids"`
	MaxClipLength          *int32                                        `queryParam:"style=form,explode=true,name=max_clip_length"`
	MinClipLength          *int32                                        `queryParam:"style=form,explode=true,name=min_clip_length"`
	Orientations           []shared.VideoOrientationRequestEnum          `queryParam:"style=form,explode=false,name=orientations"`
	Page                   *int32                                        `queryParam:"style=form,explode=true,name=page"`
	PageSize               *int32                                        `queryParam:"style=form,explode=true,name=page_size"`
	Phrase                 *string                                       `queryParam:"style=form,explode=true,name=phrase"`
	ReleaseStatus          *shared.ReleaseStatusEnum                     `queryParam:"style=form,explode=true,name=release_status"`
	SortOrder              *shared.SortOrderEnum                         `queryParam:"style=form,explode=true,name=sort_order"`
	SpecificPeople         []string                                      `queryParam:"style=form,explode=false,name=specific_people"`
	Viewpoints             []shared.ViewpointsFilterTypeEnum             `queryParam:"style=form,explode=false,name=viewpoints"`
}

type GetV3SearchVideosEditorialHeaders struct {
	AcceptLanguage *string `header:"name=Accept-Language"`
	GiCountryCode  *string `header:"name=GI-Country-Code"`
}

type GetV3SearchVideosEditorialRequest struct {
	QueryParams GetV3SearchVideosEditorialQueryParams
	Headers     GetV3SearchVideosEditorialHeaders
}

type GetV3SearchVideosEditorialResponse struct {
	ContentType                 string
	EditorialVideoSearchResults *shared.EditorialVideoSearchResults
	StatusCode                  int64
}
