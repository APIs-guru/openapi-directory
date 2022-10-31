package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateCallAnalyticsCategoryXAmzTargetEnum string

const (
	UpdateCallAnalyticsCategoryXAmzTargetEnumTranscribeUpdateCallAnalyticsCategory UpdateCallAnalyticsCategoryXAmzTargetEnum = "Transcribe.UpdateCallAnalyticsCategory"
)

type UpdateCallAnalyticsCategoryHeaders struct {
	XAmzAlgorithm     *string                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateCallAnalyticsCategoryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateCallAnalyticsCategoryRequest struct {
	Headers UpdateCallAnalyticsCategoryHeaders
	Request shared.UpdateCallAnalyticsCategoryRequest `request:"mediaType=application/json"`
}

type UpdateCallAnalyticsCategoryResponse struct {
	BadRequestException                 *interface{}
	ConflictException                   *interface{}
	ContentType                         string
	InternalFailureException            *interface{}
	LimitExceededException              *interface{}
	NotFoundException                   *interface{}
	StatusCode                          int64
	UpdateCallAnalyticsCategoryResponse *shared.UpdateCallAnalyticsCategoryResponse
}
