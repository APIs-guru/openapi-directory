package operations

import (
	"openapi/pkg/models/shared"
)

type GetCallAnalyticsCategoryXAmzTargetEnum string

const (
	GetCallAnalyticsCategoryXAmzTargetEnumTranscribeGetCallAnalyticsCategory GetCallAnalyticsCategoryXAmzTargetEnum = "Transcribe.GetCallAnalyticsCategory"
)

type GetCallAnalyticsCategoryHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetCallAnalyticsCategoryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetCallAnalyticsCategoryRequest struct {
	Headers GetCallAnalyticsCategoryHeaders
	Request shared.GetCallAnalyticsCategoryRequest `request:"mediaType=application/json"`
}

type GetCallAnalyticsCategoryResponse struct {
	BadRequestException              *interface{}
	ContentType                      string
	GetCallAnalyticsCategoryResponse *shared.GetCallAnalyticsCategoryResponse
	InternalFailureException         *interface{}
	LimitExceededException           *interface{}
	NotFoundException                *interface{}
	StatusCode                       int64
}
