package operations

import (
"openapi/pkg/models/shared")


type DescribeCreateAccountStatusXAmzTargetEnum string

const (
    DescribeCreateAccountStatusXAmzTargetEnumAwsOrganizationsV20161128DescribeCreateAccountStatus DescribeCreateAccountStatusXAmzTargetEnum = "AWSOrganizationsV20161128.DescribeCreateAccountStatus"
)


type DescribeCreateAccountStatusHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeCreateAccountStatusXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeCreateAccountStatusRequest struct {
    Headers DescribeCreateAccountStatusHeaders 
    Request shared.DescribeCreateAccountStatusRequest `request:"mediaType=application/json"`
    
}

type DescribeCreateAccountStatusResponse struct {
    AwsOrganizationsNotInUseException *interface{} 
    AccessDeniedException *interface{} 
    ContentType string 
    CreateAccountStatusNotFoundException *interface{} 
    DescribeCreateAccountStatusResponse *shared.DescribeCreateAccountStatusResponse 
    InvalidInputException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnsupportedAPIEndpointException *interface{} 
    
}

