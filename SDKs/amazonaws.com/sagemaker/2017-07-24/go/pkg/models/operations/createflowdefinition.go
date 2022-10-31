package operations

import (
"openapi/pkg/models/shared")


type CreateFlowDefinitionXAmzTargetEnum string

const (
    CreateFlowDefinitionXAmzTargetEnumSageMakerCreateFlowDefinition CreateFlowDefinitionXAmzTargetEnum = "SageMaker.CreateFlowDefinition"
)


type CreateFlowDefinitionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateFlowDefinitionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateFlowDefinitionRequest struct {
    Headers CreateFlowDefinitionHeaders 
    Request shared.CreateFlowDefinitionRequest `request:"mediaType=application/json"`
    
}

type CreateFlowDefinitionResponse struct {
    ContentType string 
    CreateFlowDefinitionResponse *shared.CreateFlowDefinitionResponse 
    ResourceInUse *interface{} 
    ResourceLimitExceeded *interface{} 
    StatusCode int64 
    
}

