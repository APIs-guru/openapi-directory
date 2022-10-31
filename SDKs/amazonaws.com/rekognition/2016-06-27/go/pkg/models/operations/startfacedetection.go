package operations

import (
"openapi/pkg/models/shared")


type StartFaceDetectionXAmzTargetEnum string

const (
    StartFaceDetectionXAmzTargetEnumRekognitionServiceStartFaceDetection StartFaceDetectionXAmzTargetEnum = "RekognitionService.StartFaceDetection"
)


type StartFaceDetectionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StartFaceDetectionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StartFaceDetectionRequest struct {
    Headers StartFaceDetectionHeaders 
    Request shared.StartFaceDetectionRequest `request:"mediaType=application/json"`
    
}

type StartFaceDetectionResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    IdempotentParameterMismatchException *interface{} 
    InternalServerError *interface{} 
    InvalidParameterException *interface{} 
    InvalidS3ObjectException *interface{} 
    LimitExceededException *interface{} 
    ProvisionedThroughputExceededException *interface{} 
    StartFaceDetectionResponse *shared.StartFaceDetectionResponse 
    StatusCode int64 
    ThrottlingException *interface{} 
    VideoTooLargeException *interface{} 
    
}

