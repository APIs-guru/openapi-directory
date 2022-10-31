package operations

import (
"openapi/pkg/models/shared")


type StartMedicalTranscriptionJobXAmzTargetEnum string

const (
    StartMedicalTranscriptionJobXAmzTargetEnumTranscribeStartMedicalTranscriptionJob StartMedicalTranscriptionJobXAmzTargetEnum = "Transcribe.StartMedicalTranscriptionJob"
)


type StartMedicalTranscriptionJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StartMedicalTranscriptionJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StartMedicalTranscriptionJobRequest struct {
    Headers StartMedicalTranscriptionJobHeaders 
    Request shared.StartMedicalTranscriptionJobRequest `request:"mediaType=application/json"`
    
}

type StartMedicalTranscriptionJobResponse struct {
    BadRequestException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    InternalFailureException *interface{} 
    LimitExceededException *interface{} 
    StartMedicalTranscriptionJobResponse *shared.StartMedicalTranscriptionJobResponse 
    StatusCode int64 
    
}

