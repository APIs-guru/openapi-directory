package operations

import (
"openapi/pkg/models/shared")


type StartAutomationExecutionXAmzTargetEnum string

const (
    StartAutomationExecutionXAmzTargetEnumAmazonSsmStartAutomationExecution StartAutomationExecutionXAmzTargetEnum = "AmazonSSM.StartAutomationExecution"
)


type StartAutomationExecutionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StartAutomationExecutionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StartAutomationExecutionRequest struct {
    Headers StartAutomationExecutionHeaders 
    Request shared.StartAutomationExecutionRequest `request:"mediaType=application/json"`
    
}

type StartAutomationExecutionResponse struct {
    AutomationDefinitionNotFoundException *interface{} 
    AutomationDefinitionVersionNotFoundException *interface{} 
    AutomationExecutionLimitExceededException *interface{} 
    ContentType string 
    IdempotentParameterMismatch *interface{} 
    InternalServerError *interface{} 
    InvalidAutomationExecutionParametersException *interface{} 
    InvalidTarget *interface{} 
    StartAutomationExecutionResult *shared.StartAutomationExecutionResult 
    StatusCode int64 
    
}

