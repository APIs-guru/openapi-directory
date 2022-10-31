package operations

import (
"openapi/pkg/models/shared")


type StopLabelingJobXAmzTargetEnum string

const (
    StopLabelingJobXAmzTargetEnumSageMakerStopLabelingJob StopLabelingJobXAmzTargetEnum = "SageMaker.StopLabelingJob"
)


type StopLabelingJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StopLabelingJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StopLabelingJobRequest struct {
    Headers StopLabelingJobHeaders 
    Request shared.StopLabelingJobRequest `request:"mediaType=application/json"`
    
}

type StopLabelingJobResponse struct {
    ContentType string 
    ResourceNotFound *interface{} 
    StatusCode int64 
    
}

