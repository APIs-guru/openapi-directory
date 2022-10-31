package operations

import (
"openapi/pkg/models/shared")


type DescribeLoadBasedAutoScalingXAmzTargetEnum string

const (
    DescribeLoadBasedAutoScalingXAmzTargetEnumOpsWorks20130218DescribeLoadBasedAutoScaling DescribeLoadBasedAutoScalingXAmzTargetEnum = "OpsWorks_20130218.DescribeLoadBasedAutoScaling"
)


type DescribeLoadBasedAutoScalingHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeLoadBasedAutoScalingXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeLoadBasedAutoScalingRequest struct {
    Headers DescribeLoadBasedAutoScalingHeaders 
    Request shared.DescribeLoadBasedAutoScalingRequest `request:"mediaType=application/json"`
    
}

type DescribeLoadBasedAutoScalingResponse struct {
    ContentType string 
    DescribeLoadBasedAutoScalingResult *shared.DescribeLoadBasedAutoScalingResult 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

