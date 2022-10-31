package operations

import (
	"openapi/pkg/models/shared"
)

type GetVocabularyXAmzTargetEnum string

const (
	GetVocabularyXAmzTargetEnumTranscribeGetVocabulary GetVocabularyXAmzTargetEnum = "Transcribe.GetVocabulary"
)

type GetVocabularyHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetVocabularyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetVocabularyRequest struct {
	Headers GetVocabularyHeaders
	Request shared.GetVocabularyRequest `request:"mediaType=application/json"`
}

type GetVocabularyResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	GetVocabularyResponse    *shared.GetVocabularyResponse
	InternalFailureException *interface{}
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
}
