package operations

import (
"openapi/pkg/models/shared")


type DescribeAddressXAmzTargetEnum string

const (
    DescribeAddressXAmzTargetEnumAwsieSnowballJobManagementServiceDescribeAddress DescribeAddressXAmzTargetEnum = "AWSIESnowballJobManagementService.DescribeAddress"
)


type DescribeAddressHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeAddressXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeAddressRequest struct {
    Headers DescribeAddressHeaders 
    Request shared.DescribeAddressRequest `request:"mediaType=application/json"`
    
}

type DescribeAddressResponse struct {
    ContentType string 
    DescribeAddressResult *shared.DescribeAddressResult 
    InvalidResourceException *interface{} 
    StatusCode int64 
    
}

