package operations

import (
"openapi/pkg/models/shared")


type DescribeEdgePackagingJobXAmzTargetEnum string

const (
    DescribeEdgePackagingJobXAmzTargetEnumSageMakerDescribeEdgePackagingJob DescribeEdgePackagingJobXAmzTargetEnum = "SageMaker.DescribeEdgePackagingJob"
)


type DescribeEdgePackagingJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeEdgePackagingJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeEdgePackagingJobRequest struct {
    Headers DescribeEdgePackagingJobHeaders 
    Request shared.DescribeEdgePackagingJobRequest `request:"mediaType=application/json"`
    
}

type DescribeEdgePackagingJobResponse struct {
    ContentType string 
    DescribeEdgePackagingJobResponse *shared.DescribeEdgePackagingJobResponse 
    ResourceNotFound *interface{} 
    StatusCode int64 
    
}

