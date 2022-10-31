package operations

import (
"openapi/pkg/models/shared")

type GetAttributeValuesQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type GetAttributeValuesXAmzTargetEnum string

const (
    GetAttributeValuesXAmzTargetEnumAwsPriceListServiceGetAttributeValues GetAttributeValuesXAmzTargetEnum = "AWSPriceListService.GetAttributeValues"
)


type GetAttributeValuesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetAttributeValuesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetAttributeValuesRequest struct {
    QueryParams GetAttributeValuesQueryParams 
    Headers GetAttributeValuesHeaders 
    Request shared.GetAttributeValuesRequest `request:"mediaType=application/json"`
    
}

type GetAttributeValuesResponse struct {
    ContentType string 
    ExpiredNextTokenException *interface{} 
    GetAttributeValuesResponse *shared.GetAttributeValuesResponse 
    InternalErrorException *interface{} 
    InvalidNextTokenException *interface{} 
    InvalidParameterException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    
}

