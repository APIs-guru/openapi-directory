package operations

import (
	"openapi/pkg/models/shared"
)

type GetInsightResultsPathParams struct {
	InsightArn string `pathParam:"style=simple,explode=false,name=InsightArn"`
}

type GetInsightResultsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetInsightResultsRequest struct {
	PathParams GetInsightResultsPathParams
	Headers    GetInsightResultsHeaders
}

type GetInsightResultsResponse struct {
	ContentType               string
	GetInsightResultsResponse *shared.GetInsightResultsResponse
	InternalException         *interface{}
	InvalidAccessException    *interface{}
	InvalidInputException     *interface{}
	LimitExceededException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
