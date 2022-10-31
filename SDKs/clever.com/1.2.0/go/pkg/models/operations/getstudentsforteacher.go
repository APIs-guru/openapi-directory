package operations

import (
"openapi/pkg/models/shared")

type GetStudentsForTeacherPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetStudentsForTeacherQueryParams struct {
    EndingBefore *string `queryParam:"style=form,explode=true,name=ending_before"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    StartingAfter *string `queryParam:"style=form,explode=true,name=starting_after"`
    
}

type GetStudentsForTeacherRequest struct {
    PathParams GetStudentsForTeacherPathParams 
    QueryParams GetStudentsForTeacherQueryParams 
    
}

type GetStudentsForTeacherResponse struct {
    ContentType string 
    NotFound *shared.NotFound 
    StatusCode int64 
    StudentsResponse *shared.StudentsResponse 
    
}

