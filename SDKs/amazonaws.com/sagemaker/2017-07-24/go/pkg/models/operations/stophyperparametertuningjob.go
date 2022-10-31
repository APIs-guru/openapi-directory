package operations

import (
"openapi/pkg/models/shared")


type StopHyperParameterTuningJobXAmzTargetEnum string

const (
    StopHyperParameterTuningJobXAmzTargetEnumSageMakerStopHyperParameterTuningJob StopHyperParameterTuningJobXAmzTargetEnum = "SageMaker.StopHyperParameterTuningJob"
)


type StopHyperParameterTuningJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StopHyperParameterTuningJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StopHyperParameterTuningJobRequest struct {
    Headers StopHyperParameterTuningJobHeaders 
    Request shared.StopHyperParameterTuningJobRequest `request:"mediaType=application/json"`
    
}

type StopHyperParameterTuningJobResponse struct {
    ContentType string 
    ResourceNotFound *interface{} 
    StatusCode int64 
    
}

