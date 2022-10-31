package operations

import (
	"openapi/pkg/models/shared"
)

type ListBatchInferenceJobsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListBatchInferenceJobsXAmzTargetEnum string

const (
	ListBatchInferenceJobsXAmzTargetEnumAmazonPersonalizeListBatchInferenceJobs ListBatchInferenceJobsXAmzTargetEnum = "AmazonPersonalize.ListBatchInferenceJobs"
)

type ListBatchInferenceJobsHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListBatchInferenceJobsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListBatchInferenceJobsRequest struct {
	QueryParams ListBatchInferenceJobsQueryParams
	Headers     ListBatchInferenceJobsHeaders
	Request     shared.ListBatchInferenceJobsRequest `request:"mediaType=application/json"`
}

type ListBatchInferenceJobsResponse struct {
	ContentType                    string
	InvalidInputException          *interface{}
	InvalidNextTokenException      *interface{}
	ListBatchInferenceJobsResponse *shared.ListBatchInferenceJobsResponse
	StatusCode                     int64
}
