package operations

import (
"openapi/pkg/models/shared")

type GetContactsForStudentPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetContactsForStudentQueryParams struct {
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    
}

type GetContactsForStudentRequest struct {
    PathParams GetContactsForStudentPathParams 
    QueryParams GetContactsForStudentQueryParams 
    
}

type GetContactsForStudentResponse struct {
    ContentType string 
    NotFound *shared.NotFound 
    StatusCode int64 
    StudentContactsForStudentResponse *shared.StudentContactsForStudentResponse 
    
}

