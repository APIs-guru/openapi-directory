package operations

import (
"openapi/pkg/models/shared")


type CreateModelQualityJobDefinitionXAmzTargetEnum string

const (
    CreateModelQualityJobDefinitionXAmzTargetEnumSageMakerCreateModelQualityJobDefinition CreateModelQualityJobDefinitionXAmzTargetEnum = "SageMaker.CreateModelQualityJobDefinition"
)


type CreateModelQualityJobDefinitionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateModelQualityJobDefinitionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateModelQualityJobDefinitionRequest struct {
    Headers CreateModelQualityJobDefinitionHeaders 
    Request shared.CreateModelQualityJobDefinitionRequest `request:"mediaType=application/json"`
    
}

type CreateModelQualityJobDefinitionResponse struct {
    ContentType string 
    CreateModelQualityJobDefinitionResponse *shared.CreateModelQualityJobDefinitionResponse 
    ResourceInUse *interface{} 
    ResourceLimitExceeded *interface{} 
    StatusCode int64 
    
}

