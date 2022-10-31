package operations

import (
"openapi/pkg/models/shared")


type DescribePipelineDefinitionForExecutionXAmzTargetEnum string

const (
    DescribePipelineDefinitionForExecutionXAmzTargetEnumSageMakerDescribePipelineDefinitionForExecution DescribePipelineDefinitionForExecutionXAmzTargetEnum = "SageMaker.DescribePipelineDefinitionForExecution"
)


type DescribePipelineDefinitionForExecutionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribePipelineDefinitionForExecutionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribePipelineDefinitionForExecutionRequest struct {
    Headers DescribePipelineDefinitionForExecutionHeaders 
    Request shared.DescribePipelineDefinitionForExecutionRequest `request:"mediaType=application/json"`
    
}

type DescribePipelineDefinitionForExecutionResponse struct {
    ContentType string 
    DescribePipelineDefinitionForExecutionResponse *shared.DescribePipelineDefinitionForExecutionResponse 
    ResourceNotFound *interface{} 
    StatusCode int64 
    
}

