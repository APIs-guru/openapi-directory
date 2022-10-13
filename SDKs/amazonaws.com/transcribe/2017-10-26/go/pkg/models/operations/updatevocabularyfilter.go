package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateVocabularyFilterXAmzTargetEnum string

const (
	UpdateVocabularyFilterXAmzTargetEnumTranscribeUpdateVocabularyFilter UpdateVocabularyFilterXAmzTargetEnum = "Transcribe.UpdateVocabularyFilter"
)

type UpdateVocabularyFilterHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateVocabularyFilterXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateVocabularyFilterRequest struct {
	Headers UpdateVocabularyFilterHeaders
	Request shared.UpdateVocabularyFilterRequest `request:"mediaType=application/json"`
}

type UpdateVocabularyFilterResponse struct {
	BadRequestException            *interface{}
	ContentType                    string
	InternalFailureException       *interface{}
	LimitExceededException         *interface{}
	NotFoundException              *interface{}
	StatusCode                     int64
	UpdateVocabularyFilterResponse *shared.UpdateVocabularyFilterResponse
}
