package operations

import (
"openapi/pkg/models/shared")


type SignalWorkflowExecutionXAmzTargetEnum string

const (
    SignalWorkflowExecutionXAmzTargetEnumSimpleWorkflowServiceSignalWorkflowExecution SignalWorkflowExecutionXAmzTargetEnum = "SimpleWorkflowService.SignalWorkflowExecution"
)


type SignalWorkflowExecutionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget SignalWorkflowExecutionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type SignalWorkflowExecutionRequest struct {
    Headers SignalWorkflowExecutionHeaders 
    Request shared.SignalWorkflowExecutionInput `request:"mediaType=application/json"`
    
}

type SignalWorkflowExecutionResponse struct {
    ContentType string 
    OperationNotPermittedFault *interface{} 
    StatusCode int64 
    UnknownResourceFault *interface{} 
    
}

