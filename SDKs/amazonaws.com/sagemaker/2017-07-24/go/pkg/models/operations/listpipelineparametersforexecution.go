package operations

import (
"openapi/pkg/models/shared")

type ListPipelineParametersForExecutionQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListPipelineParametersForExecutionXAmzTargetEnum string

const (
    ListPipelineParametersForExecutionXAmzTargetEnumSageMakerListPipelineParametersForExecution ListPipelineParametersForExecutionXAmzTargetEnum = "SageMaker.ListPipelineParametersForExecution"
)


type ListPipelineParametersForExecutionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListPipelineParametersForExecutionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListPipelineParametersForExecutionRequest struct {
    QueryParams ListPipelineParametersForExecutionQueryParams 
    Headers ListPipelineParametersForExecutionHeaders 
    Request shared.ListPipelineParametersForExecutionRequest `request:"mediaType=application/json"`
    
}

type ListPipelineParametersForExecutionResponse struct {
    ContentType string 
    ListPipelineParametersForExecutionResponse *shared.ListPipelineParametersForExecutionResponse 
    ResourceNotFound *interface{} 
    StatusCode int64 
    
}

