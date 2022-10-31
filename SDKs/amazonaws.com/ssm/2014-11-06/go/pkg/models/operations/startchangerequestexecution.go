package operations

import (
"openapi/pkg/models/shared")


type StartChangeRequestExecutionXAmzTargetEnum string

const (
    StartChangeRequestExecutionXAmzTargetEnumAmazonSsmStartChangeRequestExecution StartChangeRequestExecutionXAmzTargetEnum = "AmazonSSM.StartChangeRequestExecution"
)


type StartChangeRequestExecutionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StartChangeRequestExecutionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StartChangeRequestExecutionRequest struct {
    Headers StartChangeRequestExecutionHeaders 
    Request shared.StartChangeRequestExecutionRequest `request:"mediaType=application/json"`
    
}

type StartChangeRequestExecutionResponse struct {
    AutomationDefinitionNotApprovedException *interface{} 
    AutomationDefinitionNotFoundException *interface{} 
    AutomationDefinitionVersionNotFoundException *interface{} 
    AutomationExecutionLimitExceededException *interface{} 
    ContentType string 
    IdempotentParameterMismatch *interface{} 
    InternalServerError *interface{} 
    InvalidAutomationExecutionParametersException *interface{} 
    StartChangeRequestExecutionResult *shared.StartChangeRequestExecutionResult 
    StatusCode int64 
    
}

