package operations

import (
"openapi/pkg/models/shared")


type DeleteMedicalVocabularyXAmzTargetEnum string

const (
    DeleteMedicalVocabularyXAmzTargetEnumTranscribeDeleteMedicalVocabulary DeleteMedicalVocabularyXAmzTargetEnum = "Transcribe.DeleteMedicalVocabulary"
)


type DeleteMedicalVocabularyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteMedicalVocabularyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteMedicalVocabularyRequest struct {
    Headers DeleteMedicalVocabularyHeaders 
    Request shared.DeleteMedicalVocabularyRequest `request:"mediaType=application/json"`
    
}

type DeleteMedicalVocabularyResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    InternalFailureException *interface{} 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    
}

