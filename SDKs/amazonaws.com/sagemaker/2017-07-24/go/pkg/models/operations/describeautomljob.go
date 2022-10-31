package operations

import (
"openapi/pkg/models/shared")


type DescribeAutoMlJobXAmzTargetEnum string

const (
    DescribeAutoMlJobXAmzTargetEnumSageMakerDescribeAutoMlJob DescribeAutoMlJobXAmzTargetEnum = "SageMaker.DescribeAutoMLJob"
)


type DescribeAutoMlJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeAutoMlJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeAutoMlJobRequest struct {
    Headers DescribeAutoMlJobHeaders 
    Request shared.DescribeAutoMlJobRequest `request:"mediaType=application/json"`
    
}

type DescribeAutoMlJobResponse struct {
    ContentType string 
    DescribeAutoMlJobResponse *shared.DescribeAutoMlJobResponse 
    ResourceNotFound *interface{} 
    StatusCode int64 
    
}

