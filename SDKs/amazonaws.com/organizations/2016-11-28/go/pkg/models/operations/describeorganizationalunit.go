package operations

import (
"openapi/pkg/models/shared")


type DescribeOrganizationalUnitXAmzTargetEnum string

const (
    DescribeOrganizationalUnitXAmzTargetEnumAwsOrganizationsV20161128DescribeOrganizationalUnit DescribeOrganizationalUnitXAmzTargetEnum = "AWSOrganizationsV20161128.DescribeOrganizationalUnit"
)


type DescribeOrganizationalUnitHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeOrganizationalUnitXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeOrganizationalUnitRequest struct {
    Headers DescribeOrganizationalUnitHeaders 
    Request shared.DescribeOrganizationalUnitRequest `request:"mediaType=application/json"`
    
}

type DescribeOrganizationalUnitResponse struct {
    AwsOrganizationsNotInUseException *interface{} 
    AccessDeniedException *interface{} 
    ContentType string 
    DescribeOrganizationalUnitResponse *shared.DescribeOrganizationalUnitResponse 
    InvalidInputException *interface{} 
    OrganizationalUnitNotFoundException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

