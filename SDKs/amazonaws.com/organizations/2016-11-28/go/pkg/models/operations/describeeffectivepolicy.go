package operations

import (
"openapi/pkg/models/shared")


type DescribeEffectivePolicyXAmzTargetEnum string

const (
    DescribeEffectivePolicyXAmzTargetEnumAwsOrganizationsV20161128DescribeEffectivePolicy DescribeEffectivePolicyXAmzTargetEnum = "AWSOrganizationsV20161128.DescribeEffectivePolicy"
)


type DescribeEffectivePolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeEffectivePolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeEffectivePolicyRequest struct {
    Headers DescribeEffectivePolicyHeaders 
    Request shared.DescribeEffectivePolicyRequest `request:"mediaType=application/json"`
    
}

type DescribeEffectivePolicyResponse struct {
    AwsOrganizationsNotInUseException *interface{} 
    AccessDeniedException *interface{} 
    ConstraintViolationException *interface{} 
    ContentType string 
    DescribeEffectivePolicyResponse *shared.DescribeEffectivePolicyResponse 
    EffectivePolicyNotFoundException *interface{} 
    InvalidInputException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    TargetNotFoundException *interface{} 
    TooManyRequestsException *interface{} 
    UnsupportedAPIEndpointException *interface{} 
    
}

