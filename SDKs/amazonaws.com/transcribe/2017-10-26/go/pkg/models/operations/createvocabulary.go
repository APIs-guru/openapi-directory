package operations

import (
	"openapi/pkg/models/shared"
)

type CreateVocabularyXAmzTargetEnum string

const (
	CreateVocabularyXAmzTargetEnumTranscribeCreateVocabulary CreateVocabularyXAmzTargetEnum = "Transcribe.CreateVocabulary"
)

type CreateVocabularyHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateVocabularyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateVocabularyRequest struct {
	Headers CreateVocabularyHeaders
	Request shared.CreateVocabularyRequest `request:"mediaType=application/json"`
}

type CreateVocabularyResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	CreateVocabularyResponse *shared.CreateVocabularyResponse
	InternalFailureException *interface{}
	LimitExceededException   *interface{}
	StatusCode               int64
}
