package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCallAnalyticsJobXAmzTargetEnum string

const (
	DeleteCallAnalyticsJobXAmzTargetEnumTranscribeDeleteCallAnalyticsJob DeleteCallAnalyticsJobXAmzTargetEnum = "Transcribe.DeleteCallAnalyticsJob"
)

type DeleteCallAnalyticsJobHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteCallAnalyticsJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteCallAnalyticsJobRequest struct {
	Headers DeleteCallAnalyticsJobHeaders
	Request shared.DeleteCallAnalyticsJobRequest `request:"mediaType=application/json"`
}

type DeleteCallAnalyticsJobResponse struct {
	BadRequestException            *interface{}
	ContentType                    string
	DeleteCallAnalyticsJobResponse map[string]interface{}
	InternalFailureException       *interface{}
	LimitExceededException         *interface{}
	StatusCode                     int64
}
