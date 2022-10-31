package operations

import (
"openapi/pkg/models/shared")

type EstimationAPIURIQueryParams struct {
    ID int32 `queryParam:"style=form,explode=true,name=id"`
    
}

type EstimationAPIURIHeaders struct {
    XAuthKey string `header:"style=simple,explode=false,name=x-auth-key"`
    XAuthSecret string `header:"style=simple,explode=false,name=x-auth-secret"`
    
}

type EstimationAPIURIRequest struct {
    QueryParams EstimationAPIURIQueryParams 
    Headers EstimationAPIURIHeaders 
    
}

type EstimationAPIURIResponse struct {
    Body []byte 
    ContentType string 
    EstimationURIAPIModel *shared.EstimationURIAPIModel 
    StatusCode int64 
    
}

