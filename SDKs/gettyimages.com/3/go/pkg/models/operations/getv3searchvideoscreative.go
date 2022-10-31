package operations

import (
"openapi/pkg/models/shared")

type GetV3SearchVideosCreativeQueryParams struct {
    AgeOfPeople []shared.AgeOfPeopleFilterTypeEnum `queryParam:"style=form,explode=false,name=age_of_people"`
    Artists *string `queryParam:"style=form,explode=true,name=artists"`
    AspectRatios []shared.VideoAspectRatioFilterTypeEnum `queryParam:"style=form,explode=false,name=aspect_ratios"`
    CollectionCodes []string `queryParam:"style=form,explode=false,name=collection_codes"`
    CollectionsFilterType *shared.CollectionsFilterTypeEnum `queryParam:"style=form,explode=true,name=collections_filter_type"`
    Compositions []shared.CompositionsFilterTypeEnum `queryParam:"style=form,explode=false,name=compositions"`
    DownloadProduct *string `queryParam:"style=form,explode=true,name=download_product"`
    ExcludeEditorialUseOnly *bool `queryParam:"style=form,explode=true,name=exclude_editorial_use_only"`
    ExcludeNudity *bool `queryParam:"style=form,explode=true,name=exclude_nudity"`
    FacetFields []shared.CreateVideoSearchFacetsFieldsEnum `queryParam:"style=form,explode=false,name=facet_fields"`
    FacetMaxCount *int32 `queryParam:"style=form,explode=true,name=facet_max_count"`
    Fields []shared.CreativeVideosFieldValuesEnum `queryParam:"style=form,explode=false,name=fields"`
    FormatAvailable *shared.VideoFormatsRequestEnum `queryParam:"style=form,explode=true,name=format_available"`
    FrameRates []shared.VideoFrameRatesEnum `queryParam:"style=form,explode=false,name=frame_rates"`
    ImageTechniques []shared.ImageTechniquesFilterTypeEnum `queryParam:"style=form,explode=false,name=image_techniques"`
    IncludeFacets *bool `queryParam:"style=form,explode=true,name=include_facets"`
    IncludeRelatedSearches *bool `queryParam:"style=form,explode=true,name=include_related_searches"`
    KeywordIds []int32 `queryParam:"style=form,explode=false,name=keyword_ids"`
    LicenseModels []shared.LicenseModelVideoRequestEnum `queryParam:"style=form,explode=false,name=license_models"`
    MaxClipLength *int32 `queryParam:"style=form,explode=true,name=max_clip_length"`
    MinClipLength *int32 `queryParam:"style=form,explode=true,name=min_clip_length"`
    Orientations []shared.VideoOrientationRequestEnum `queryParam:"style=form,explode=false,name=orientations"`
    Page *int32 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int32 `queryParam:"style=form,explode=true,name=page_size"`
    Phrase *string `queryParam:"style=form,explode=true,name=phrase"`
    ReleaseStatus *shared.ReleaseStatusEnum `queryParam:"style=form,explode=true,name=release_status"`
    SafeSearch *bool `queryParam:"style=form,explode=true,name=safe_search"`
    SortOrder *shared.CreativeVideoSortOrderEnum `queryParam:"style=form,explode=true,name=sort_order"`
    Viewpoints []shared.ViewpointsFilterTypeEnum `queryParam:"style=form,explode=false,name=viewpoints"`
    
}

type GetV3SearchVideosCreativeHeaders struct {
    AcceptLanguage *string `header:"style=simple,explode=false,name=Accept-Language"`
    GiCountryCode *string `header:"style=simple,explode=false,name=GI-Country-Code"`
    
}

type GetV3SearchVideosCreativeRequest struct {
    QueryParams GetV3SearchVideosCreativeQueryParams 
    Headers GetV3SearchVideosCreativeHeaders 
    
}

type GetV3SearchVideosCreativeResponse struct {
    ContentType string 
    CreativeVideoSearchResults *shared.CreativeVideoSearchResults 
    StatusCode int64 
    
}

