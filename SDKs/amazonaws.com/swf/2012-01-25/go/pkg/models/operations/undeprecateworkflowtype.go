package operations

import (
"openapi/pkg/models/shared")


type UndeprecateWorkflowTypeXAmzTargetEnum string

const (
    UndeprecateWorkflowTypeXAmzTargetEnumSimpleWorkflowServiceUndeprecateWorkflowType UndeprecateWorkflowTypeXAmzTargetEnum = "SimpleWorkflowService.UndeprecateWorkflowType"
)


type UndeprecateWorkflowTypeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UndeprecateWorkflowTypeXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UndeprecateWorkflowTypeRequest struct {
    Headers UndeprecateWorkflowTypeHeaders 
    Request shared.UndeprecateWorkflowTypeInput `request:"mediaType=application/json"`
    
}

type UndeprecateWorkflowTypeResponse struct {
    ContentType string 
    OperationNotPermittedFault *interface{} 
    StatusCode int64 
    TypeAlreadyExistsFault *interface{} 
    UnknownResourceFault *interface{} 
    
}

