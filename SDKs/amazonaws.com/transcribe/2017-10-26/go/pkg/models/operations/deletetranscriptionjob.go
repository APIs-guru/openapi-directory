package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteTranscriptionJobXAmzTargetEnum string

const (
	DeleteTranscriptionJobXAmzTargetEnumTranscribeDeleteTranscriptionJob DeleteTranscriptionJobXAmzTargetEnum = "Transcribe.DeleteTranscriptionJob"
)

type DeleteTranscriptionJobHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteTranscriptionJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteTranscriptionJobRequest struct {
	Headers DeleteTranscriptionJobHeaders
	Request shared.DeleteTranscriptionJobRequest `request:"mediaType=application/json"`
}

type DeleteTranscriptionJobResponse struct {
	BadRequestException      *interface{}
	ContentType              string
	InternalFailureException *interface{}
	LimitExceededException   *interface{}
	StatusCode               int64
}
