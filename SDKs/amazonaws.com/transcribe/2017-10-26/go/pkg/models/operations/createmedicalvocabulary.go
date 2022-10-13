package operations

import (
	"openapi/pkg/models/shared"
)

type CreateMedicalVocabularyXAmzTargetEnum string

const (
	CreateMedicalVocabularyXAmzTargetEnumTranscribeCreateMedicalVocabulary CreateMedicalVocabularyXAmzTargetEnum = "Transcribe.CreateMedicalVocabulary"
)

type CreateMedicalVocabularyHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateMedicalVocabularyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateMedicalVocabularyRequest struct {
	Headers CreateMedicalVocabularyHeaders
	Request shared.CreateMedicalVocabularyRequest `request:"mediaType=application/json"`
}

type CreateMedicalVocabularyResponse struct {
	BadRequestException             *interface{}
	ConflictException               *interface{}
	ContentType                     string
	CreateMedicalVocabularyResponse *shared.CreateMedicalVocabularyResponse
	InternalFailureException        *interface{}
	LimitExceededException          *interface{}
	StatusCode                      int64
}
