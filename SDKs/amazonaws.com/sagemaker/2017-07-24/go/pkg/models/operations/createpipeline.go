package operations

import (
"openapi/pkg/models/shared")


type CreatePipelineXAmzTargetEnum string

const (
    CreatePipelineXAmzTargetEnumSageMakerCreatePipeline CreatePipelineXAmzTargetEnum = "SageMaker.CreatePipeline"
)


type CreatePipelineHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreatePipelineXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreatePipelineRequest struct {
    Headers CreatePipelineHeaders 
    Request shared.CreatePipelineRequest `request:"mediaType=application/json"`
    
}

type CreatePipelineResponse struct {
    ContentType string 
    CreatePipelineResponse *shared.CreatePipelineResponse 
    ResourceLimitExceeded *interface{} 
    ResourceNotFound *interface{} 
    StatusCode int64 
    
}

