package operations

import (
"openapi/pkg/models/shared")

type GetEpisodesByCategoryPathParams struct {
    Category string `pathParam:"style=simple,explode=false,name=category"`
    
}


type GetEpisodesByCategorySortEnum string

const (
    GetEpisodesByCategorySortEnumRecent GetEpisodesByCategorySortEnum = "recent"
GetEpisodesByCategorySortEnumPopular GetEpisodesByCategorySortEnum = "popular"
)


type GetEpisodesByCategoryQueryParams struct {
    Availability shared.AvailabilityEnum `queryParam:"style=form,explode=true,name=availability"`
    Lang shared.LangEnum `queryParam:"style=form,explode=true,name=lang"`
    Page int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage int64 `queryParam:"style=form,explode=true,name=per_page"`
    Rights shared.RightsEnum `queryParam:"style=form,explode=true,name=rights"`
    Sort *GetEpisodesByCategorySortEnum `queryParam:"style=form,explode=true,name=sort"`
    
}

type GetEpisodesByCategoryRequest struct {
    PathParams GetEpisodesByCategoryPathParams 
    QueryParams GetEpisodesByCategoryQueryParams 
    
}

type GetEpisodesByCategoryResponse struct {
    ContentType string 
    StatusCode int64 
    Ibl *interface{} 
    
}

