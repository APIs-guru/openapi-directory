package operations

import (
"openapi/pkg/models/shared")

type WorkTypeAPIDetailsQueryParams struct {
    WorkTypeID int32 `queryParam:"style=form,explode=true,name=workTypeId"`
    
}

type WorkTypeAPIDetailsHeaders struct {
    XAuthKey string `header:"style=simple,explode=false,name=x-auth-key"`
    XAuthSecret string `header:"style=simple,explode=false,name=x-auth-secret"`
    
}

type WorkTypeAPIDetailsRequest struct {
    QueryParams WorkTypeAPIDetailsQueryParams 
    Headers WorkTypeAPIDetailsHeaders 
    
}

type WorkTypeAPIDetailsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    WorkTypeDetailsAPIModel *shared.WorkTypeDetailsAPIModel 
    
}

