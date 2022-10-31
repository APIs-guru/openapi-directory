package operations

import (
"openapi/pkg/models/shared")


type CreateTransformJobXAmzTargetEnum string

const (
    CreateTransformJobXAmzTargetEnumSageMakerCreateTransformJob CreateTransformJobXAmzTargetEnum = "SageMaker.CreateTransformJob"
)


type CreateTransformJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateTransformJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateTransformJobRequest struct {
    Headers CreateTransformJobHeaders 
    Request shared.CreateTransformJobRequest `request:"mediaType=application/json"`
    
}

type CreateTransformJobResponse struct {
    ContentType string 
    CreateTransformJobResponse *shared.CreateTransformJobResponse 
    ResourceInUse *interface{} 
    ResourceLimitExceeded *interface{} 
    ResourceNotFound *interface{} 
    StatusCode int64 
    
}

