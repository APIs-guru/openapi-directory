package operations

import (
"openapi/pkg/models/shared")


type ConversionsCountStatusEnum string

const (
    ConversionsCountStatusEnumDeleted ConversionsCountStatusEnum = "deleted"
ConversionsCountStatusEnumActive ConversionsCountStatusEnum = "active"
)


type ConversionsCountQueryParams struct {
    CreatedAfter *string `queryParam:"style=form,explode=true,name=createdAfter"`
    CreatedBefore *string `queryParam:"style=form,explode=true,name=createdBefore"`
    Status *ConversionsCountStatusEnum `queryParam:"style=form,explode=true,name=status"`
    TextSearch *string `queryParam:"style=form,explode=true,name=textSearch"`
    
}

type ConversionsCountRequest struct {
    QueryParams ConversionsCountQueryParams 
    
}

type ConversionsCountResponse struct {
    APICoreResponsesCountResponce *shared.APICoreResponsesCountResponce 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

