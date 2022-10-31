package operations

import (
"openapi/pkg/models/shared")


type UpdatePipelineExecutionXAmzTargetEnum string

const (
    UpdatePipelineExecutionXAmzTargetEnumSageMakerUpdatePipelineExecution UpdatePipelineExecutionXAmzTargetEnum = "SageMaker.UpdatePipelineExecution"
)


type UpdatePipelineExecutionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdatePipelineExecutionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdatePipelineExecutionRequest struct {
    Headers UpdatePipelineExecutionHeaders 
    Request shared.UpdatePipelineExecutionRequest `request:"mediaType=application/json"`
    
}

type UpdatePipelineExecutionResponse struct {
    ContentType string 
    ResourceNotFound *interface{} 
    StatusCode int64 
    UpdatePipelineExecutionResponse *shared.UpdatePipelineExecutionResponse 
    
}

