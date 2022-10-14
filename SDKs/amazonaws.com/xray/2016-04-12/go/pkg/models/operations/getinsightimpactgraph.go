package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetInsightImpactGraphHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetInsightImpactGraphRequestBody struct {
	EndTime   time.Time `json:"EndTime"`
	InsightID string    `json:"InsightId"`
	NextToken *string   `json:"NextToken,omitempty"`
	StartTime time.Time `json:"StartTime"`
}

type GetInsightImpactGraphRequest struct {
	Headers GetInsightImpactGraphHeaders
	Request GetInsightImpactGraphRequestBody `request:"mediaType=application/json"`
}

type GetInsightImpactGraphResponse struct {
	ContentType                 string
	GetInsightImpactGraphResult *shared.GetInsightImpactGraphResult
	InvalidRequestException     *interface{}
	StatusCode                  int64
	ThrottledException          *interface{}
}
