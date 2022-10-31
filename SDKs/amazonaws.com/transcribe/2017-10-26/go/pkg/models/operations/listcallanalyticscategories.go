package operations

import (
	"openapi/pkg/models/shared"
)

type ListCallAnalyticsCategoriesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListCallAnalyticsCategoriesXAmzTargetEnum string

const (
	ListCallAnalyticsCategoriesXAmzTargetEnumTranscribeListCallAnalyticsCategories ListCallAnalyticsCategoriesXAmzTargetEnum = "Transcribe.ListCallAnalyticsCategories"
)

type ListCallAnalyticsCategoriesHeaders struct {
	XAmzAlgorithm     *string                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListCallAnalyticsCategoriesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListCallAnalyticsCategoriesRequest struct {
	QueryParams ListCallAnalyticsCategoriesQueryParams
	Headers     ListCallAnalyticsCategoriesHeaders
	Request     shared.ListCallAnalyticsCategoriesRequest `request:"mediaType=application/json"`
}

type ListCallAnalyticsCategoriesResponse struct {
	BadRequestException                 *interface{}
	ContentType                         string
	InternalFailureException            *interface{}
	LimitExceededException              *interface{}
	ListCallAnalyticsCategoriesResponse *shared.ListCallAnalyticsCategoriesResponse
	StatusCode                          int64
}
