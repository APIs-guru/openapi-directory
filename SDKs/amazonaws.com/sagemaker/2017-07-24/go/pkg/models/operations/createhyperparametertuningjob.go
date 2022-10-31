package operations

import (
"openapi/pkg/models/shared")


type CreateHyperParameterTuningJobXAmzTargetEnum string

const (
    CreateHyperParameterTuningJobXAmzTargetEnumSageMakerCreateHyperParameterTuningJob CreateHyperParameterTuningJobXAmzTargetEnum = "SageMaker.CreateHyperParameterTuningJob"
)


type CreateHyperParameterTuningJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateHyperParameterTuningJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateHyperParameterTuningJobRequest struct {
    Headers CreateHyperParameterTuningJobHeaders 
    Request shared.CreateHyperParameterTuningJobRequest `request:"mediaType=application/json"`
    
}

type CreateHyperParameterTuningJobResponse struct {
    ContentType string 
    CreateHyperParameterTuningJobResponse *shared.CreateHyperParameterTuningJobResponse 
    ResourceInUse *interface{} 
    ResourceLimitExceeded *interface{} 
    StatusCode int64 
    
}

