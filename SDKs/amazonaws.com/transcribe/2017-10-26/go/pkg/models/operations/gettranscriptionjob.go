package operations

import (
"openapi/pkg/models/shared")


type GetTranscriptionJobXAmzTargetEnum string

const (
    GetTranscriptionJobXAmzTargetEnumTranscribeGetTranscriptionJob GetTranscriptionJobXAmzTargetEnum = "Transcribe.GetTranscriptionJob"
)


type GetTranscriptionJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetTranscriptionJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetTranscriptionJobRequest struct {
    Headers GetTranscriptionJobHeaders 
    Request shared.GetTranscriptionJobRequest `request:"mediaType=application/json"`
    
}

type GetTranscriptionJobResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    GetTranscriptionJobResponse *shared.GetTranscriptionJobResponse 
    InternalFailureException *interface{} 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    
}

