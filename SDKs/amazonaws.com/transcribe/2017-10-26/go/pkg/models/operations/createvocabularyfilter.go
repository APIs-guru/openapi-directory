package operations

import (
	"openapi/pkg/models/shared"
)

type CreateVocabularyFilterXAmzTargetEnum string

const (
	CreateVocabularyFilterXAmzTargetEnumTranscribeCreateVocabularyFilter CreateVocabularyFilterXAmzTargetEnum = "Transcribe.CreateVocabularyFilter"
)

type CreateVocabularyFilterHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateVocabularyFilterXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateVocabularyFilterRequest struct {
	Headers CreateVocabularyFilterHeaders
	Request shared.CreateVocabularyFilterRequest `request:"mediaType=application/json"`
}

type CreateVocabularyFilterResponse struct {
	BadRequestException            *interface{}
	ConflictException              *interface{}
	ContentType                    string
	CreateVocabularyFilterResponse *shared.CreateVocabularyFilterResponse
	InternalFailureException       *interface{}
	LimitExceededException         *interface{}
	StatusCode                     int64
}
