package operations

import (
	"openapi/pkg/models/shared"
)

type GetSamplingTargetsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
