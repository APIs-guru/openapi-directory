package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateVocabularyXAmzTargetEnum string

const (
	UpdateVocabularyXAmzTargetEnumTranscribeUpdateVocabulary UpdateVocabularyXAmzTargetEnum = "Transcribe.UpdateVocabulary"
)

type UpdateVocabularyHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateVocabularyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateVocabularyRequest struct {
	Headers UpdateVocabularyHeaders
	Request shared.UpdateVocabularyRequest `request:"mediaType=application/json"`
}

type UpdateVocabularyResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	InternalFailureException *interface{}
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
	UpdateVocabularyResponse *shared.UpdateVocabularyResponse
}
