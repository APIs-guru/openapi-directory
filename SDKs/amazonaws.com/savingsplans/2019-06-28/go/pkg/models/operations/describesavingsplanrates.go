package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeSavingsPlanRatesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeSavingsPlanRatesRequestBody struct {
	Filters       []shared.SavingsPlanRateFilter `json:"filters"`
	MaxResults    *int64                         `json:"maxResults"`
	NextToken     *string                        `json:"nextToken"`
	SavingsPlanID string                         `json:"savingsPlanId"`
}

type DescribeSavingsPlanRatesRequest struct {
	Headers DescribeSavingsPlanRatesHeaders
	Request DescribeSavingsPlanRatesRequestBody `request:"mediaType=application/json"`
}

type DescribeSavingsPlanRatesResponse struct {
	ContentType                      string
	DescribeSavingsPlanRatesResponse *shared.DescribeSavingsPlanRatesResponse
	ResourceNotFoundException        *interface{}
	StatusCode                       int64
	ValidationException              *interface{}
}
