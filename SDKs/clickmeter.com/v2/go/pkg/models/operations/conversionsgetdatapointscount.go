package operations

import (
"openapi/pkg/models/shared")

type ConversionsGetDatapointsCountPathParams struct {
    ConversionID int64 `pathParam:"style=simple,explode=false,name=conversionId"`
    
}

type ConversionsGetDatapointsCountQueryParams struct {
    CreatedAfter *string `queryParam:"style=form,explode=true,name=createdAfter"`
    CreatedBefore *string `queryParam:"style=form,explode=true,name=createdBefore"`
    Status *string `queryParam:"style=form,explode=true,name=status"`
    Tags *string `queryParam:"style=form,explode=true,name=tags"`
    TextSearch *string `queryParam:"style=form,explode=true,name=textSearch"`
    Type *string `queryParam:"style=form,explode=true,name=type"`
    
}

type ConversionsGetDatapointsCountRequest struct {
    PathParams ConversionsGetDatapointsCountPathParams 
    QueryParams ConversionsGetDatapointsCountQueryParams 
    
}

type ConversionsGetDatapointsCountResponse struct {
    APICoreResponsesCountResponce *shared.APICoreResponsesCountResponce 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

