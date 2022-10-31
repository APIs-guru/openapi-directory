package operations

import (
"openapi/pkg/models/shared")

type GetStudentsQueryParams struct {
    EndingBefore *string `queryParam:"style=form,explode=true,name=ending_before"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    StartingAfter *string `queryParam:"style=form,explode=true,name=starting_after"`
    Where *string `queryParam:"style=form,explode=true,name=where"`
    
}

type GetStudentsRequest struct {
    QueryParams GetStudentsQueryParams 
    
}

type GetStudentsResponse struct {
    ContentType string 
    StatusCode int64 
    StudentsResponse *shared.StudentsResponse 
    
}

