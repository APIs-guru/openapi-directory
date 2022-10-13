package operations

import (
	"openapi/pkg/models/shared"
)

type GetVocabularyFilterXAmzTargetEnum string

const (
	GetVocabularyFilterXAmzTargetEnumTranscribeGetVocabularyFilter GetVocabularyFilterXAmzTargetEnum = "Transcribe.GetVocabularyFilter"
)

type GetVocabularyFilterHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetVocabularyFilterXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetVocabularyFilterRequest struct {
	Headers GetVocabularyFilterHeaders
	Request shared.GetVocabularyFilterRequest `request:"mediaType=application/json"`
}

type GetVocabularyFilterResponse struct {
	BadRequestException         *interface{}
	ContentType                 string
	GetVocabularyFilterResponse *shared.GetVocabularyFilterResponse
	InternalFailureException    *interface{}
	LimitExceededException      *interface{}
	NotFoundException           *interface{}
	StatusCode                  int64
}
