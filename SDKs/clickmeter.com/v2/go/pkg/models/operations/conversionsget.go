package operations

import (
"openapi/pkg/models/shared")


type ConversionsGetStatusEnum string

const (
    ConversionsGetStatusEnumDeleted ConversionsGetStatusEnum = "deleted"
ConversionsGetStatusEnumActive ConversionsGetStatusEnum = "active"
)


type ConversionsGetQueryParams struct {
    CreatedAfter *string `queryParam:"style=form,explode=true,name=createdAfter"`
    CreatedBefore *string `queryParam:"style=form,explode=true,name=createdBefore"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    Status *ConversionsGetStatusEnum `queryParam:"style=form,explode=true,name=status"`
    TextSearch *string `queryParam:"style=form,explode=true,name=textSearch"`
    
}

type ConversionsGetRequest struct {
    QueryParams ConversionsGetQueryParams 
    
}

type ConversionsGetResponse struct {
    APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64 *shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64 
    ContentType string 
    StatusCode int64 
    
}

