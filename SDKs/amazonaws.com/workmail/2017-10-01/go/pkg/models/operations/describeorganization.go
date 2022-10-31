package operations

import (
"openapi/pkg/models/shared")


type DescribeOrganizationXAmzTargetEnum string

const (
    DescribeOrganizationXAmzTargetEnumWorkMailServiceDescribeOrganization DescribeOrganizationXAmzTargetEnum = "WorkMailService.DescribeOrganization"
)


type DescribeOrganizationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeOrganizationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeOrganizationRequest struct {
    Headers DescribeOrganizationHeaders 
    Request shared.DescribeOrganizationRequest `request:"mediaType=application/json"`
    
}

type DescribeOrganizationResponse struct {
    ContentType string 
    DescribeOrganizationResponse *shared.DescribeOrganizationResponse 
    InvalidParameterException *interface{} 
    OrganizationNotFoundException *interface{} 
    StatusCode int64 
    
}

