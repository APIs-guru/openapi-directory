package operations

import (
	"openapi/pkg/models/shared"
)

type GetCallAnalyticsCategoryXAmzTargetEnum string

const (
	GetCallAnalyticsCategoryXAmzTargetEnumTranscribeGetCallAnalyticsCategory GetCallAnalyticsCategoryXAmzTargetEnum = "Transcribe.GetCallAnalyticsCategory"
)

type GetCallAnalyticsCategoryHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetCallAnalyticsCategoryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
