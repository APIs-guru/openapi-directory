package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCallAnalyticsCategoryXAmzTargetEnum string

const (
	CreateCallAnalyticsCategoryXAmzTargetEnumTranscribeCreateCallAnalyticsCategory CreateCallAnalyticsCategoryXAmzTargetEnum = "Transcribe.CreateCallAnalyticsCategory"
)

type CreateCallAnalyticsCategoryHeaders struct {
	XAmzAlgorithm     *string                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateCallAnalyticsCategoryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
