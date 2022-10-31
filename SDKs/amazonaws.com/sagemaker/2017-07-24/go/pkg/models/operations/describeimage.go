package operations

import (
"openapi/pkg/models/shared")


type DescribeImageXAmzTargetEnum string

const (
    DescribeImageXAmzTargetEnumSageMakerDescribeImage DescribeImageXAmzTargetEnum = "SageMaker.DescribeImage"
)


type DescribeImageHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeImageXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeImageRequest struct {
    Headers DescribeImageHeaders 
    Request shared.DescribeImageRequest `request:"mediaType=application/json"`
    
}

type DescribeImageResponse struct {
    ContentType string 
    DescribeImageResponse *shared.DescribeImageResponse 
    ResourceNotFound *interface{} 
    StatusCode int64 
    
}

