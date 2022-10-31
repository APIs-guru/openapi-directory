package operations

import (
"openapi/pkg/models/shared")


type StartTranscriptionJobXAmzTargetEnum string

const (
    StartTranscriptionJobXAmzTargetEnumTranscribeStartTranscriptionJob StartTranscriptionJobXAmzTargetEnum = "Transcribe.StartTranscriptionJob"
)


type StartTranscriptionJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StartTranscriptionJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StartTranscriptionJobRequest struct {
    Headers StartTranscriptionJobHeaders 
    Request shared.StartTranscriptionJobRequest `request:"mediaType=application/json"`
    
}

type StartTranscriptionJobResponse struct {
    BadRequestException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    InternalFailureException *interface{} 
    LimitExceededException *interface{} 
    StartTranscriptionJobResponse *shared.StartTranscriptionJobResponse 
    StatusCode int64 
    
}

