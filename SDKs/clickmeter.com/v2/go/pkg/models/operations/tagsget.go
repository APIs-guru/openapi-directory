package operations

import (
"openapi/pkg/models/shared")


type TagsGetTypeEnum string

const (
    TagsGetTypeEnumTp TagsGetTypeEnum = "tp"
TagsGetTypeEnumTl TagsGetTypeEnum = "tl"
TagsGetTypeEnumDp TagsGetTypeEnum = "dp"
TagsGetTypeEnumGr TagsGetTypeEnum = "gr"
)


type TagsGetQueryParams struct {
    Datapoints *string `queryParam:"style=form,explode=true,name=datapoints"`
    Groups *string `queryParam:"style=form,explode=true,name=groups"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    Type *TagsGetTypeEnum `queryParam:"style=form,explode=true,name=type"`
    
}

type TagsGetRequest struct {
    QueryParams TagsGetQueryParams 
    
}

type TagsGetResponse struct {
    APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64 *shared.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64 
    ContentType string 
    StatusCode int64 
    
}

