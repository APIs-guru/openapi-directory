package operations

import (
"openapi/pkg/models/shared")


type RetryPipelineExecutionXAmzTargetEnum string

const (
    RetryPipelineExecutionXAmzTargetEnumSageMakerRetryPipelineExecution RetryPipelineExecutionXAmzTargetEnum = "SageMaker.RetryPipelineExecution"
)


type RetryPipelineExecutionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget RetryPipelineExecutionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type RetryPipelineExecutionRequest struct {
    Headers RetryPipelineExecutionHeaders 
    Request shared.RetryPipelineExecutionRequest `request:"mediaType=application/json"`
    
}

type RetryPipelineExecutionResponse struct {
    ConflictException *interface{} 
    ContentType string 
    ResourceLimitExceeded *interface{} 
    ResourceNotFound *interface{} 
    RetryPipelineExecutionResponse *shared.RetryPipelineExecutionResponse 
    StatusCode int64 
    
}

