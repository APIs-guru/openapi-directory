package operations

import (
	"openapi/pkg/models/shared"
)

type GetInsightResultsPathParams struct {
	InsightArn string `pathParam:"style=simple,explode=false,name=InsightArn"`
}

type GetInsightResultsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
