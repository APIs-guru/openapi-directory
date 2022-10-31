package operations

import (
"openapi/pkg/models/shared")


type DescribeSecurityPolicyXAmzTargetEnum string

const (
    DescribeSecurityPolicyXAmzTargetEnumTransferServiceDescribeSecurityPolicy DescribeSecurityPolicyXAmzTargetEnum = "TransferService.DescribeSecurityPolicy"
)


type DescribeSecurityPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeSecurityPolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeSecurityPolicyRequest struct {
    Headers DescribeSecurityPolicyHeaders 
    Request shared.DescribeSecurityPolicyRequest `request:"mediaType=application/json"`
    
}

type DescribeSecurityPolicyResponse struct {
    ContentType string 
    DescribeSecurityPolicyResponse *shared.DescribeSecurityPolicyResponse 
    InternalServiceError *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    
}

