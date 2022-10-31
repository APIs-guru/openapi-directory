package operations

import (
"openapi/pkg/models/shared")


type GetLayerVersionByArnFindEnum string

const (
    GetLayerVersionByArnFindEnumLayerVersion GetLayerVersionByArnFindEnum = "LayerVersion"
)


type GetLayerVersionByArnQueryParams struct {
    Arn string `queryParam:"style=form,explode=true,name=Arn"`
    Find GetLayerVersionByArnFindEnum `queryParam:"style=form,explode=true,name=find"`
    
}

type GetLayerVersionByArnHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetLayerVersionByArnRequest struct {
    QueryParams GetLayerVersionByArnQueryParams 
    Headers GetLayerVersionByArnHeaders 
    
}

type GetLayerVersionByArnResponse struct {
    ContentType string 
    GetLayerVersionResponse *shared.GetLayerVersionResponse 
    InvalidParameterValueException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

