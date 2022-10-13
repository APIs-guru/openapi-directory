package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteVocabularyXAmzTargetEnum string

const (
	DeleteVocabularyXAmzTargetEnumTranscribeDeleteVocabulary DeleteVocabularyXAmzTargetEnum = "Transcribe.DeleteVocabulary"
)

type DeleteVocabularyHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteVocabularyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteVocabularyRequest struct {
	Headers DeleteVocabularyHeaders
	Request shared.DeleteVocabularyRequest `request:"mediaType=application/json"`
}

type DeleteVocabularyResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	InternalFailureException *interface{}
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
}
