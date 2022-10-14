package operations

import (
	"openapi/pkg/models/shared"
)

type GetInsightEventsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetInsightEventsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetInsightEventsRequestBody struct {
	InsightID  string  `json:"InsightId"`
	MaxResults *int64  `json:"MaxResults,omitempty"`
	NextToken  *string `json:"NextToken,omitempty"`
}

type GetInsightEventsRequest struct {
	QueryParams GetInsightEventsQueryParams
	Headers     GetInsightEventsHeaders
	Request     GetInsightEventsRequestBody `request:"mediaType=application/json"`
}

type GetInsightEventsResponse struct {
	ContentType             string
	GetInsightEventsResult  *shared.GetInsightEventsResult
	InvalidRequestException *interface{}
	StatusCode              int64
	ThrottledException      *interface{}
}
