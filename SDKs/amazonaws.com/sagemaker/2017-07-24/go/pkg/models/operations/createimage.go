package operations

import (
"openapi/pkg/models/shared")


type CreateImageXAmzTargetEnum string

const (
    CreateImageXAmzTargetEnumSageMakerCreateImage CreateImageXAmzTargetEnum = "SageMaker.CreateImage"
)


type CreateImageHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateImageXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateImageRequest struct {
    Headers CreateImageHeaders 
    Request shared.CreateImageRequest `request:"mediaType=application/json"`
    
}

type CreateImageResponse struct {
    ContentType string 
    CreateImageResponse *shared.CreateImageResponse 
    ResourceInUse *interface{} 
    ResourceLimitExceeded *interface{} 
    StatusCode int64 
    
}

