package operations

import (
"openapi/pkg/models/shared")


type DeleteInferenceSchedulerXAmzTargetEnum string

const (
    DeleteInferenceSchedulerXAmzTargetEnumAwsLookoutEquipmentFrontendServiceDeleteInferenceScheduler DeleteInferenceSchedulerXAmzTargetEnum = "AWSLookoutEquipmentFrontendService.DeleteInferenceScheduler"
)


type DeleteInferenceSchedulerHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteInferenceSchedulerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteInferenceSchedulerRequest struct {
    Headers DeleteInferenceSchedulerHeaders 
    Request shared.DeleteInferenceSchedulerRequest `request:"mediaType=application/json"`
    
}

type DeleteInferenceSchedulerResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

