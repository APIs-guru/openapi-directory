package operations

import (
"openapi/pkg/models/shared")


type DescribeTableXAmzTargetEnum string

const (
    DescribeTableXAmzTargetEnumTimestream20181101DescribeTable DescribeTableXAmzTargetEnum = "Timestream_20181101.DescribeTable"
)


type DescribeTableHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeTableXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeTableRequest struct {
    Headers DescribeTableHeaders 
    Request shared.DescribeTableRequest `request:"mediaType=application/json"`
    
}

type DescribeTableResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DescribeTableResponse *shared.DescribeTableResponse 
    InternalServerException *interface{} 
    InvalidEndpointException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

