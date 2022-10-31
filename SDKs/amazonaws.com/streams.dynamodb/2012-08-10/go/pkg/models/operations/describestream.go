package operations

import (
"openapi/pkg/models/shared")


type DescribeStreamXAmzTargetEnum string

const (
    DescribeStreamXAmzTargetEnumDynamoDbStreams20120810DescribeStream DescribeStreamXAmzTargetEnum = "DynamoDBStreams_20120810.DescribeStream"
)


type DescribeStreamHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeStreamXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeStreamRequest struct {
    Headers DescribeStreamHeaders 
    Request shared.DescribeStreamInput `request:"mediaType=application/json"`
    
}

type DescribeStreamResponse struct {
    ContentType string 
    DescribeStreamOutput *shared.DescribeStreamOutput 
    InternalServerError *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

