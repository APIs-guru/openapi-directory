package operations

import (
"openapi/pkg/models/shared")


type DescribeAccountXAmzTargetEnum string

const (
    DescribeAccountXAmzTargetEnumAwsOrganizationsV20161128DescribeAccount DescribeAccountXAmzTargetEnum = "AWSOrganizationsV20161128.DescribeAccount"
)


type DescribeAccountHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeAccountXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeAccountRequest struct {
    Headers DescribeAccountHeaders 
    Request shared.DescribeAccountRequest `request:"mediaType=application/json"`
    
}

type DescribeAccountResponse struct {
    AwsOrganizationsNotInUseException *interface{} 
    AccessDeniedException *interface{} 
    AccountNotFoundException *interface{} 
    ContentType string 
    DescribeAccountResponse *shared.DescribeAccountResponse 
    InvalidInputException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

