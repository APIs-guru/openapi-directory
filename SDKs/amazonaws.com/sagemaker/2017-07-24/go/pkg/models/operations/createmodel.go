package operations

import (
"openapi/pkg/models/shared")


type CreateModelXAmzTargetEnum string

const (
    CreateModelXAmzTargetEnumSageMakerCreateModel CreateModelXAmzTargetEnum = "SageMaker.CreateModel"
)


type CreateModelHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateModelXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateModelRequest struct {
    Headers CreateModelHeaders 
    Request shared.CreateModelInput `request:"mediaType=application/json"`
    
}

type CreateModelResponse struct {
    ContentType string 
    CreateModelOutput *shared.CreateModelOutput 
    ResourceLimitExceeded *interface{} 
    StatusCode int64 
    
}

