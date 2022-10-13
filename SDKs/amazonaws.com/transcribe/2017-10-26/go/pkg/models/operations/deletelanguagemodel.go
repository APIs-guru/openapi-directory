package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteLanguageModelXAmzTargetEnum string

const (
	DeleteLanguageModelXAmzTargetEnumTranscribeDeleteLanguageModel DeleteLanguageModelXAmzTargetEnum = "Transcribe.DeleteLanguageModel"
)

type DeleteLanguageModelHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteLanguageModelXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteLanguageModelRequest struct {
	Headers DeleteLanguageModelHeaders
	Request shared.DeleteLanguageModelRequest `request:"mediaType=application/json"`
}

type DeleteLanguageModelResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	InternalFailureException *interface{}
	LimitExceededException   *interface{}
	StatusCode               int64
}
