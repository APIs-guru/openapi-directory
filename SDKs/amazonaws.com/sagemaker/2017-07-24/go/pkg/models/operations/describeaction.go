package operations

import (
"openapi/pkg/models/shared")


type DescribeActionXAmzTargetEnum string

const (
    DescribeActionXAmzTargetEnumSageMakerDescribeAction DescribeActionXAmzTargetEnum = "SageMaker.DescribeAction"
)


type DescribeActionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeActionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeActionRequest struct {
    Headers DescribeActionHeaders 
    Request shared.DescribeActionRequest `request:"mediaType=application/json"`
    
}

type DescribeActionResponse struct {
    ContentType string 
    DescribeActionResponse *shared.DescribeActionResponse 
    ResourceNotFound *interface{} 
    StatusCode int64 
    
}

