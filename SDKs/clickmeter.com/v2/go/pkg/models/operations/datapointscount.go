package operations

import (
"openapi/pkg/models/shared")


type DataPointsCountStatusEnum string

const (
    DataPointsCountStatusEnumDeleted DataPointsCountStatusEnum = "deleted"
DataPointsCountStatusEnumActive DataPointsCountStatusEnum = "active"
DataPointsCountStatusEnumPaused DataPointsCountStatusEnum = "paused"
DataPointsCountStatusEnumSpam DataPointsCountStatusEnum = "spam"
)



type DataPointsCountTypeEnum string

const (
    DataPointsCountTypeEnumTp DataPointsCountTypeEnum = "tp"
DataPointsCountTypeEnumTl DataPointsCountTypeEnum = "tl"
)


type DataPointsCountQueryParams struct {
    CreatedAfter *string `queryParam:"style=form,explode=true,name=createdAfter"`
    CreatedBefore *string `queryParam:"style=form,explode=true,name=createdBefore"`
    OnlyFavorites *bool `queryParam:"style=form,explode=true,name=onlyFavorites"`
    Status *DataPointsCountStatusEnum `queryParam:"style=form,explode=true,name=status"`
    Tags *string `queryParam:"style=form,explode=true,name=tags"`
    TextSearch *string `queryParam:"style=form,explode=true,name=textSearch"`
    Type *DataPointsCountTypeEnum `queryParam:"style=form,explode=true,name=type"`
    
}

type DataPointsCountRequest struct {
    QueryParams DataPointsCountQueryParams 
    
}

type DataPointsCountResponse struct {
    APICoreResponsesCountResponce *shared.APICoreResponsesCountResponce 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

