package operations

import (
"openapi/pkg/models/shared")

type ListProgrammeDetailsQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
    PartnerPid *string `queryParam:"style=form,explode=true,name=partner_pid"`
    Pid *string `queryParam:"style=form,explode=true,name=pid"`
    
}

type ListProgrammeDetailsRequest struct {
    QueryParams ListProgrammeDetailsQueryParams 
    
}

type ListProgrammeDetailsResponse struct {
    Body []byte 
    ContentType string 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    Nitro *interface{} 
    
}

