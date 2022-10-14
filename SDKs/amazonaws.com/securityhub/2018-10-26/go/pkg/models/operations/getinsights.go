package operations

import (
	"openapi/pkg/models/shared"
)

type GetInsightsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetInsightsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetInsightsRequestBody struct {
	InsightArns []string `json:"InsightArns,omitempty"`
	MaxResults  *int64   `json:"MaxResults,omitempty"`
	NextToken   *string  `json:"NextToken,omitempty"`
}

type GetInsightsRequest struct {
	QueryParams GetInsightsQueryParams
	Headers     GetInsightsHeaders
	Request     GetInsightsRequestBody `request:"mediaType=application/json"`
}

type GetInsightsResponse struct {
	ContentType               string
	GetInsightsResponse       *shared.GetInsightsResponse
	InternalException         *interface{}
	InvalidAccessException    *interface{}
	InvalidInputException     *interface{}
	LimitExceededException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
