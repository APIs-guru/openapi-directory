package operations

import (
"openapi/pkg/models/shared")


type DescribePolicyXAmzTargetEnum string

const (
    DescribePolicyXAmzTargetEnumAwsOrganizationsV20161128DescribePolicy DescribePolicyXAmzTargetEnum = "AWSOrganizationsV20161128.DescribePolicy"
)


type DescribePolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribePolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribePolicyRequest struct {
    Headers DescribePolicyHeaders 
    Request shared.DescribePolicyRequest `request:"mediaType=application/json"`
    
}

type DescribePolicyResponse struct {
    AwsOrganizationsNotInUseException *interface{} 
    AccessDeniedException *interface{} 
    ContentType string 
    DescribePolicyResponse *shared.DescribePolicyResponse 
    InvalidInputException *interface{} 
    PolicyNotFoundException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnsupportedAPIEndpointException *interface{} 
    
}

