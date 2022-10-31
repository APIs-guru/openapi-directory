package operations

import (
"openapi/pkg/models/shared")

type GetProgrammesAtoZSearchPathParams struct {
    Letter string `pathParam:"style=simple,explode=false,name=letter"`
    
}


type GetProgrammesAtoZSearchSortEnum string

const (
    GetProgrammesAtoZSearchSortEnumTitle GetProgrammesAtoZSearchSortEnum = "title"
)


type GetProgrammesAtoZSearchQueryParams struct {
    Availability shared.AvailabilityEnum `queryParam:"style=form,explode=true,name=availability"`
    InitialChildCount int64 `queryParam:"style=form,explode=true,name=initial_child_count"`
    Page int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage int64 `queryParam:"style=form,explode=true,name=per_page"`
    Rights shared.RightsEnum `queryParam:"style=form,explode=true,name=rights"`
    Sort GetProgrammesAtoZSearchSortEnum `queryParam:"style=form,explode=true,name=sort"`
    SortDirection shared.SortDirectionEnum `queryParam:"style=form,explode=true,name=sort_direction"`
    
}

type GetProgrammesAtoZSearchRequest struct {
    PathParams GetProgrammesAtoZSearchPathParams 
    QueryParams GetProgrammesAtoZSearchQueryParams 
    
}

type GetProgrammesAtoZSearchResponse struct {
    ContentType string 
    StatusCode int64 
    Ibl *interface{} 
    
}

