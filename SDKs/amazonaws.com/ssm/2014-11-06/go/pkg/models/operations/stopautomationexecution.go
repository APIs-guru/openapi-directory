package operations

import (
"openapi/pkg/models/shared")


type StopAutomationExecutionXAmzTargetEnum string

const (
    StopAutomationExecutionXAmzTargetEnumAmazonSsmStopAutomationExecution StopAutomationExecutionXAmzTargetEnum = "AmazonSSM.StopAutomationExecution"
)


type StopAutomationExecutionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StopAutomationExecutionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StopAutomationExecutionRequest struct {
    Headers StopAutomationExecutionHeaders 
    Request shared.StopAutomationExecutionRequest `request:"mediaType=application/json"`
    
}

type StopAutomationExecutionResponse struct {
    AutomationExecutionNotFoundException *interface{} 
    ContentType string 
    InternalServerError *interface{} 
    InvalidAutomationStatusUpdateException *interface{} 
    StatusCode int64 
    StopAutomationExecutionResult map[string]interface{} 
    
}

