package operations

import (
"openapi/pkg/models/shared")


type DescribeWorkflowXAmzTargetEnum string

const (
    DescribeWorkflowXAmzTargetEnumTransferServiceDescribeWorkflow DescribeWorkflowXAmzTargetEnum = "TransferService.DescribeWorkflow"
)


type DescribeWorkflowHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeWorkflowXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeWorkflowRequest struct {
    Headers DescribeWorkflowHeaders 
    Request shared.DescribeWorkflowRequest `request:"mediaType=application/json"`
    
}

type DescribeWorkflowResponse struct {
    ContentType string 
    DescribeWorkflowResponse *shared.DescribeWorkflowResponse 
    InternalServiceError *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    
}

