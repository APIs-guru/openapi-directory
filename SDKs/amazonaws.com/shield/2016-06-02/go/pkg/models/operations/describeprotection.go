package operations

import (
"openapi/pkg/models/shared")


type DescribeProtectionXAmzTargetEnum string

const (
    DescribeProtectionXAmzTargetEnumAwsShield20160616DescribeProtection DescribeProtectionXAmzTargetEnum = "AWSShield_20160616.DescribeProtection"
)


type DescribeProtectionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeProtectionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeProtectionRequest struct {
    Headers DescribeProtectionHeaders 
    Request shared.DescribeProtectionRequest `request:"mediaType=application/json"`
    
}

type DescribeProtectionResponse struct {
    ContentType string 
    DescribeProtectionResponse *shared.DescribeProtectionResponse 
    InternalErrorException *interface{} 
    InvalidParameterException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

