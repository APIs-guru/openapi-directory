package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLanguageModelXAmzTargetEnum string

const (
	CreateLanguageModelXAmzTargetEnumTranscribeCreateLanguageModel CreateLanguageModelXAmzTargetEnum = "Transcribe.CreateLanguageModel"
)

type CreateLanguageModelHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateLanguageModelXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateLanguageModelRequest struct {
	Headers CreateLanguageModelHeaders
	Request shared.CreateLanguageModelRequest `request:"mediaType=application/json"`
}

type CreateLanguageModelResponse struct {
	BadRequestException         *interface{}
	ConflictException           *interface{}
	ContentType                 string
	CreateLanguageModelResponse *shared.CreateLanguageModelResponse
	InternalFailureException    *interface{}
	LimitExceededException      *interface{}
	StatusCode                  int64
}
