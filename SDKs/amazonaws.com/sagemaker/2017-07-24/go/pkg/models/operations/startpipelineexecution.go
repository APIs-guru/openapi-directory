package operations

import (
"openapi/pkg/models/shared")


type StartPipelineExecutionXAmzTargetEnum string

const (
    StartPipelineExecutionXAmzTargetEnumSageMakerStartPipelineExecution StartPipelineExecutionXAmzTargetEnum = "SageMaker.StartPipelineExecution"
)


type StartPipelineExecutionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StartPipelineExecutionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StartPipelineExecutionRequest struct {
    Headers StartPipelineExecutionHeaders 
    Request shared.StartPipelineExecutionRequest `request:"mediaType=application/json"`
    
}

type StartPipelineExecutionResponse struct {
    ContentType string 
    ResourceLimitExceeded *interface{} 
    ResourceNotFound *interface{} 
    StartPipelineExecutionResponse *shared.StartPipelineExecutionResponse 
    StatusCode int64 
    
}

