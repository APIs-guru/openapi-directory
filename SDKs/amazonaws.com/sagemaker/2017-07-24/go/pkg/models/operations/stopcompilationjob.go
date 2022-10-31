package operations

import (
"openapi/pkg/models/shared")


type StopCompilationJobXAmzTargetEnum string

const (
    StopCompilationJobXAmzTargetEnumSageMakerStopCompilationJob StopCompilationJobXAmzTargetEnum = "SageMaker.StopCompilationJob"
)


type StopCompilationJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StopCompilationJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StopCompilationJobRequest struct {
    Headers StopCompilationJobHeaders 
    Request shared.StopCompilationJobRequest `request:"mediaType=application/json"`
    
}

type StopCompilationJobResponse struct {
    ContentType string 
    ResourceNotFound *interface{} 
    StatusCode int64 
    
}

