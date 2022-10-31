package operations

import (
"openapi/pkg/models/shared")

type GetSchoolsForSchoolAdminPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetSchoolsForSchoolAdminQueryParams struct {
    EndingBefore *string `queryParam:"style=form,explode=true,name=ending_before"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    StartingAfter *string `queryParam:"style=form,explode=true,name=starting_after"`
    
}

type GetSchoolsForSchoolAdminRequest struct {
    PathParams GetSchoolsForSchoolAdminPathParams 
    QueryParams GetSchoolsForSchoolAdminQueryParams 
    
}

type GetSchoolsForSchoolAdminResponse struct {
    ContentType string 
    NotFound *shared.NotFound 
    SchoolsResponse *shared.SchoolsResponse 
    StatusCode int64 
    
}

