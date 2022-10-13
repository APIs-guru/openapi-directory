package operations

import (
	"openapi/pkg/models/shared"
)

type GetMedicalVocabularyXAmzTargetEnum string

const (
	GetMedicalVocabularyXAmzTargetEnumTranscribeGetMedicalVocabulary GetMedicalVocabularyXAmzTargetEnum = "Transcribe.GetMedicalVocabulary"
)

type GetMedicalVocabularyHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetMedicalVocabularyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetMedicalVocabularyRequest struct {
	Headers GetMedicalVocabularyHeaders
	Request shared.GetMedicalVocabularyRequest `request:"mediaType=application/json"`
}

type GetMedicalVocabularyResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	GetMedicalVocabularyResponse *shared.GetMedicalVocabularyResponse
	InternalFailureException     *interface{}
	LimitExceededException       *interface{}
	NotFoundException            *interface{}
	StatusCode                   int64
}
