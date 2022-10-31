package operations

import (
"openapi/pkg/models/shared")


type StopTrainingJobXAmzTargetEnum string

const (
    StopTrainingJobXAmzTargetEnumSageMakerStopTrainingJob StopTrainingJobXAmzTargetEnum = "SageMaker.StopTrainingJob"
)


type StopTrainingJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StopTrainingJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StopTrainingJobRequest struct {
    Headers StopTrainingJobHeaders 
    Request shared.StopTrainingJobRequest `request:"mediaType=application/json"`
    
}

type StopTrainingJobResponse struct {
    ContentType string 
    ResourceNotFound *interface{} 
    StatusCode int64 
    
}

