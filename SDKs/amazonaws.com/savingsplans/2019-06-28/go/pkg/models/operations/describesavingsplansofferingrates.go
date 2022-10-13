package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeSavingsPlansOfferingRatesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeSavingsPlansOfferingRatesRequestBody struct {
	Filters                   []shared.SavingsPlanOfferingRateFilterElement `json:"filters"`
	MaxResults                *int64                                        `json:"maxResults"`
	NextToken                 *string                                       `json:"nextToken"`
	Operations                []string                                      `json:"operations"`
	Products                  []shared.SavingsPlanProductTypeEnum           `json:"products"`
	SavingsPlanOfferingIds    []string                                      `json:"savingsPlanOfferingIds"`
	SavingsPlanPaymentOptions []shared.SavingsPlanPaymentOptionEnum         `json:"savingsPlanPaymentOptions"`
	SavingsPlanTypes          []shared.SavingsPlanTypeEnum                  `json:"savingsPlanTypes"`
	ServiceCodes              []shared.SavingsPlanRateServiceCodeEnum       `json:"serviceCodes"`
	UsageTypes                []string                                      `json:"usageTypes"`
}

type DescribeSavingsPlansOfferingRatesRequest struct {
	Headers DescribeSavingsPlansOfferingRatesHeaders
	Request DescribeSavingsPlansOfferingRatesRequestBody `request:"mediaType=application/json"`
}

type DescribeSavingsPlansOfferingRatesResponse struct {
	ContentType                               string
	DescribeSavingsPlansOfferingRatesResponse *shared.DescribeSavingsPlansOfferingRatesResponse
	InternalServerException                   *interface{}
	StatusCode                                int64
	ValidationException                       *interface{}
}
