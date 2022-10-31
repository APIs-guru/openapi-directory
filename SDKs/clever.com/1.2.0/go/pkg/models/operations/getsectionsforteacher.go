package operations

import (
"openapi/pkg/models/shared")

type GetSectionsForTeacherPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetSectionsForTeacherQueryParams struct {
    EndingBefore *string `queryParam:"style=form,explode=true,name=ending_before"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    StartingAfter *string `queryParam:"style=form,explode=true,name=starting_after"`
    
}

type GetSectionsForTeacherRequest struct {
    PathParams GetSectionsForTeacherPathParams 
    QueryParams GetSectionsForTeacherQueryParams 
    
}

type GetSectionsForTeacherResponse struct {
    ContentType string 
    NotFound *shared.NotFound 
    SectionsResponse *shared.SectionsResponse 
    StatusCode int64 
    
}

