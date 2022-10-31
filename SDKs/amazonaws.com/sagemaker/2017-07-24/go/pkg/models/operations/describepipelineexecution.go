package operations

import (
"openapi/pkg/models/shared")


type DescribePipelineExecutionXAmzTargetEnum string

const (
    DescribePipelineExecutionXAmzTargetEnumSageMakerDescribePipelineExecution DescribePipelineExecutionXAmzTargetEnum = "SageMaker.DescribePipelineExecution"
)


type DescribePipelineExecutionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribePipelineExecutionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribePipelineExecutionRequest struct {
    Headers DescribePipelineExecutionHeaders 
    Request shared.DescribePipelineExecutionRequest `request:"mediaType=application/json"`
    
}

type DescribePipelineExecutionResponse struct {
    ContentType string 
    DescribePipelineExecutionResponse *shared.DescribePipelineExecutionResponse 
    ResourceNotFound *interface{} 
    StatusCode int64 
    
}

