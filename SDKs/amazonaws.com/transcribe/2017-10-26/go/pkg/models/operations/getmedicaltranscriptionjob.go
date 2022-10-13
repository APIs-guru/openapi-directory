package operations

import (
	"openapi/pkg/models/shared"
)

type GetMedicalTranscriptionJobXAmzTargetEnum string

const (
	GetMedicalTranscriptionJobXAmzTargetEnumTranscribeGetMedicalTranscriptionJob GetMedicalTranscriptionJobXAmzTargetEnum = "Transcribe.GetMedicalTranscriptionJob"
)

type GetMedicalTranscriptionJobHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetMedicalTranscriptionJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetMedicalTranscriptionJobRequest struct {
	Headers GetMedicalTranscriptionJobHeaders
	Request shared.GetMedicalTranscriptionJobRequest `request:"mediaType=application/json"`
}

type GetMedicalTranscriptionJobResponse struct {
	BadRequestException                *interface{}
	ContentType                        string
	GetMedicalTranscriptionJobResponse *shared.GetMedicalTranscriptionJobResponse
	InternalFailureException           *interface{}
	LimitExceededException             *interface{}
	NotFoundException                  *interface{}
	StatusCode                         int64
}
