package operations

import (
	"openapi/pkg/models/shared"
)

type GetSamplingTargetsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetSamplingTargetsRequestBody struct {
	SamplingStatisticsDocuments []shared.SamplingStatisticsDocument `json:"SamplingStatisticsDocuments"`
}

type GetSamplingTargetsRequest struct {
	Headers GetSamplingTargetsHeaders
	Request GetSamplingTargetsRequestBody `request:"mediaType=application/json"`
}

type GetSamplingTargetsResponse struct {
	ContentType              string
	GetSamplingTargetsResult *shared.GetSamplingTargetsResult
	InvalidRequestException  *interface{}
	StatusCode               int64
	ThrottledException       *interface{}
}
