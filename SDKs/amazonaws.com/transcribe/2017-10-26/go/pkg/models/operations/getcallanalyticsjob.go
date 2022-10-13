package operations

import (
	"openapi/pkg/models/shared"
)

type GetCallAnalyticsJobXAmzTargetEnum string

const (
	GetCallAnalyticsJobXAmzTargetEnumTranscribeGetCallAnalyticsJob GetCallAnalyticsJobXAmzTargetEnum = "Transcribe.GetCallAnalyticsJob"
)

type GetCallAnalyticsJobHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetCallAnalyticsJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetCallAnalyticsJobRequest struct {
	Headers GetCallAnalyticsJobHeaders
	Request shared.GetCallAnalyticsJobRequest `request:"mediaType=application/json"`
}

type GetCallAnalyticsJobResponse struct {
	BadRequestException         *interface{}
	ContentType                 string
	GetCallAnalyticsJobResponse *shared.GetCallAnalyticsJobResponse
	InternalFailureException    *interface{}
	LimitExceededException      *interface{}
	NotFoundException           *interface{}
	StatusCode                  int64
}
