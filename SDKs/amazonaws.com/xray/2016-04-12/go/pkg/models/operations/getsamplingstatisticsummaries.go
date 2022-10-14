package operations

import (
	"openapi/pkg/models/shared"
)

type GetSamplingStatisticSummariesQueryParams struct {
	NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetSamplingStatisticSummariesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetSamplingStatisticSummariesRequestBody struct {
	NextToken *string `json:"NextToken,omitempty"`
}

type GetSamplingStatisticSummariesRequest struct {
	QueryParams GetSamplingStatisticSummariesQueryParams
	Headers     GetSamplingStatisticSummariesHeaders
	Request     GetSamplingStatisticSummariesRequestBody `request:"mediaType=application/json"`
}

type GetSamplingStatisticSummariesResponse struct {
	ContentType                         string
	GetSamplingStatisticSummariesResult *shared.GetSamplingStatisticSummariesResult
	InvalidRequestException             *interface{}
	StatusCode                          int64
	ThrottledException                  *interface{}
}
