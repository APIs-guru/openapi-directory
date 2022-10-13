package operations

import (
	"openapi/pkg/models/shared"
)

type GetTranscriptionJobXAmzTargetEnum string

const (
	GetTranscriptionJobXAmzTargetEnumTranscribeGetTranscriptionJob GetTranscriptionJobXAmzTargetEnum = "Transcribe.GetTranscriptionJob"
)

type GetTranscriptionJobHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetTranscriptionJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetTranscriptionJobRequest struct {
	Headers GetTranscriptionJobHeaders
	Request shared.GetTranscriptionJobRequest `request:"mediaType=application/json"`
}

type GetTranscriptionJobResponse struct {
	BadRequestException         *interface{}
	ContentType                 string
	GetTranscriptionJobResponse *shared.GetTranscriptionJobResponse
	InternalFailureException    *interface{}
	LimitExceededException      *interface{}
	NotFoundException           *interface{}
	StatusCode                  int64
}
