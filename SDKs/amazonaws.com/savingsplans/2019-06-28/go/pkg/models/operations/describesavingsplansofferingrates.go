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
	Filters                   []shared.SavingsPlanOfferingRateFilterElement `json:"filters,omitempty"`
	MaxResults                *int64                                        `json:"maxResults,omitempty"`
	NextToken                 *string                                       `json:"nextToken,omitempty"`
	Operations                []string                                      `json:"operations,omitempty"`
	Products                  []shared.SavingsPlanProductTypeEnum           `json:"products,omitempty"`
	SavingsPlanOfferingIds    []string                                      `json:"savingsPlanOfferingIds,omitempty"`
	SavingsPlanPaymentOptions []shared.SavingsPlanPaymentOptionEnum         `json:"savingsPlanPaymentOptions,omitempty"`
	SavingsPlanTypes          []shared.SavingsPlanTypeEnum                  `json:"savingsPlanTypes,omitempty"`
	ServiceCodes              []shared.SavingsPlanRateServiceCodeEnum       `json:"serviceCodes,omitempty"`
	UsageTypes                []string                                      `json:"usageTypes,omitempty"`
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
