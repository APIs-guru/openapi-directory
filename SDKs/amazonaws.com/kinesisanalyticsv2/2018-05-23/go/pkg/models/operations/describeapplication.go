package operations

import (
"openapi/pkg/models/shared")


type DescribeApplicationXAmzTargetEnum string

const (
    DescribeApplicationXAmzTargetEnumKinesisAnalytics20180523DescribeApplication DescribeApplicationXAmzTargetEnum = "KinesisAnalytics_20180523.DescribeApplication"
)


type DescribeApplicationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeApplicationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeApplicationRequest struct {
    Headers DescribeApplicationHeaders 
    Request shared.DescribeApplicationRequest `request:"mediaType=application/json"`
    
}

type DescribeApplicationResponse struct {
    ContentType string 
    DescribeApplicationResponse *shared.DescribeApplicationResponse 
    InvalidArgumentException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

