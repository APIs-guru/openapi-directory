package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCallAnalyticsCategoryXAmzTargetEnum string

const (
	DeleteCallAnalyticsCategoryXAmzTargetEnumTranscribeDeleteCallAnalyticsCategory DeleteCallAnalyticsCategoryXAmzTargetEnum = "Transcribe.DeleteCallAnalyticsCategory"
)

type DeleteCallAnalyticsCategoryHeaders struct {
	XAmzAlgorithm     *string                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteCallAnalyticsCategoryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteCallAnalyticsCategoryRequest struct {
	Headers DeleteCallAnalyticsCategoryHeaders
	Request shared.DeleteCallAnalyticsCategoryRequest `request:"mediaType=application/json"`
}

type DeleteCallAnalyticsCategoryResponse struct {
	BadRequestException                 *interface{}
	ContentType                         string
	DeleteCallAnalyticsCategoryResponse map[string]interface{}
	InternalFailureException            *interface{}
	LimitExceededException              *interface{}
	NotFoundException                   *interface{}
	StatusCode                          int64
}
