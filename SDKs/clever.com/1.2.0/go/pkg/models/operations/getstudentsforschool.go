package operations

import (
"openapi/pkg/models/shared")

type GetStudentsForSchoolPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetStudentsForSchoolQueryParams struct {
    EndingBefore *string `queryParam:"style=form,explode=true,name=ending_before"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    StartingAfter *string `queryParam:"style=form,explode=true,name=starting_after"`
    Where *string `queryParam:"style=form,explode=true,name=where"`
    
}

type GetStudentsForSchoolRequest struct {
    PathParams GetStudentsForSchoolPathParams 
    QueryParams GetStudentsForSchoolQueryParams 
    
}

type GetStudentsForSchoolResponse struct {
    ContentType string 
    NotFound *shared.NotFound 
    StatusCode int64 
    StudentsResponse *shared.StudentsResponse 
    
}

