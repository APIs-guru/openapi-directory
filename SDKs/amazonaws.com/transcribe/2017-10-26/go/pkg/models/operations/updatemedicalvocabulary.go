package operations

import (
"openapi/pkg/models/shared")


type UpdateMedicalVocabularyXAmzTargetEnum string

const (
    UpdateMedicalVocabularyXAmzTargetEnumTranscribeUpdateMedicalVocabulary UpdateMedicalVocabularyXAmzTargetEnum = "Transcribe.UpdateMedicalVocabulary"
)


type UpdateMedicalVocabularyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateMedicalVocabularyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateMedicalVocabularyRequest struct {
    Headers UpdateMedicalVocabularyHeaders 
    Request shared.UpdateMedicalVocabularyRequest `request:"mediaType=application/json"`
    
}

type UpdateMedicalVocabularyResponse struct {
    BadRequestException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    InternalFailureException *interface{} 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    UpdateMedicalVocabularyResponse *shared.UpdateMedicalVocabularyResponse 
    
}

