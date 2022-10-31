package operations

import (
"openapi/pkg/models/shared")

type GetDistrictPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetDistrictQueryParams struct {
    Include *string `queryParam:"style=form,explode=true,name=include"`
    
}

type GetDistrictRequest struct {
    PathParams GetDistrictPathParams 
    QueryParams GetDistrictQueryParams 
    
}

type GetDistrictResponse struct {
    ContentType string 
    DistrictResponse *shared.DistrictResponse 
    NotFound *shared.NotFound 
    StatusCode int64 
    
}

