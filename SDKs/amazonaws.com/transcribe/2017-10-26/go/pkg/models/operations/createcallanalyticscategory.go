package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCallAnalyticsCategoryXAmzTargetEnum string

const (
	CreateCallAnalyticsCategoryXAmzTargetEnumTranscribeCreateCallAnalyticsCategory CreateCallAnalyticsCategoryXAmzTargetEnum = "Transcribe.CreateCallAnalyticsCategory"
)

type CreateCallAnalyticsCategoryHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateCallAnalyticsCategoryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateCallAnalyticsCategoryRequest struct {
	Headers CreateCallAnalyticsCategoryHeaders
	Request shared.CreateCallAnalyticsCategoryRequest `request:"mediaType=application/json"`
}

type CreateCallAnalyticsCategoryResponse struct {
	BadRequestException                 *interface{}
	ConflictException                   *interface{}
	ContentType                         string
	CreateCallAnalyticsCategoryResponse *shared.CreateCallAnalyticsCategoryResponse
	InternalFailureException            *interface{}
	LimitExceededException              *interface{}
	StatusCode                          int64
}
