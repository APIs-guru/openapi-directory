package operations

import (
"openapi/pkg/models/shared")


type DeleteWorkflowXAmzTargetEnum string

const (
    DeleteWorkflowXAmzTargetEnumTransferServiceDeleteWorkflow DeleteWorkflowXAmzTargetEnum = "TransferService.DeleteWorkflow"
)


type DeleteWorkflowHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteWorkflowXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteWorkflowRequest struct {
    Headers DeleteWorkflowHeaders 
    Request shared.DeleteWorkflowRequest `request:"mediaType=application/json"`
    
}

type DeleteWorkflowResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServiceError *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    
}

