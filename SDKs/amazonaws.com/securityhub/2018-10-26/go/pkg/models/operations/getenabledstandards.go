package operations

import (
	"openapi/pkg/models/shared"
)

type GetEnabledStandardsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetEnabledStandardsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetEnabledStandardsRequestBody struct {
	MaxResults                *int64   `json:"MaxResults"`
	NextToken                 *string  `json:"NextToken"`
	StandardsSubscriptionArns []string `json:"StandardsSubscriptionArns"`
}

type GetEnabledStandardsRequest struct {
	QueryParams GetEnabledStandardsQueryParams
	Headers     GetEnabledStandardsHeaders
	Request     GetEnabledStandardsRequestBody `request:"mediaType=application/json"`
}

type GetEnabledStandardsResponse struct {
	ContentType                 string
	GetEnabledStandardsResponse *shared.GetEnabledStandardsResponse
	InternalException           *interface{}
	InvalidAccessException      *interface{}
	InvalidInputException       *interface{}
	LimitExceededException      *interface{}
	StatusCode                  int64
}
