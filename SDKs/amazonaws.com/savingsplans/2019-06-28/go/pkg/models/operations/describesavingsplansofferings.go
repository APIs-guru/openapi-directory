package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeSavingsPlansOfferingsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeSavingsPlansOfferingsRequestBodyProductTypeEnum string

const (
	DescribeSavingsPlansOfferingsRequestBodyProductTypeEnumEc2       DescribeSavingsPlansOfferingsRequestBodyProductTypeEnum = "EC2"
	DescribeSavingsPlansOfferingsRequestBodyProductTypeEnumFargate   DescribeSavingsPlansOfferingsRequestBodyProductTypeEnum = "Fargate"
	DescribeSavingsPlansOfferingsRequestBodyProductTypeEnumLambda    DescribeSavingsPlansOfferingsRequestBodyProductTypeEnum = "Lambda"
	DescribeSavingsPlansOfferingsRequestBodyProductTypeEnumSageMaker DescribeSavingsPlansOfferingsRequestBodyProductTypeEnum = "SageMaker"
)

type DescribeSavingsPlansOfferingsRequestBody struct {
	Currencies     []shared.CurrencyCodeEnum                                `json:"currencies,omitempty"`
	Descriptions   []string                                                 `json:"descriptions,omitempty"`
	Durations      []int64                                                  `json:"durations,omitempty"`
	Filters        []shared.SavingsPlanOfferingFilterElement                `json:"filters,omitempty"`
	MaxResults     *int64                                                   `json:"maxResults,omitempty"`
	NextToken      *string                                                  `json:"nextToken,omitempty"`
	OfferingIds    []string                                                 `json:"offeringIds,omitempty"`
	Operations     []string                                                 `json:"operations,omitempty"`
	PaymentOptions []shared.SavingsPlanPaymentOptionEnum                    `json:"paymentOptions,omitempty"`
	PlanTypes      []shared.SavingsPlanTypeEnum                             `json:"planTypes,omitempty"`
	ProductType    *DescribeSavingsPlansOfferingsRequestBodyProductTypeEnum `json:"productType,omitempty"`
	ServiceCodes   []string                                                 `json:"serviceCodes,omitempty"`
	UsageTypes     []string                                                 `json:"usageTypes,omitempty"`
}

type DescribeSavingsPlansOfferingsRequest struct {
	Headers DescribeSavingsPlansOfferingsHeaders
	Request DescribeSavingsPlansOfferingsRequestBody `request:"mediaType=application/json"`
}

type DescribeSavingsPlansOfferingsResponse struct {
	ContentType                           string
	DescribeSavingsPlansOfferingsResponse *shared.DescribeSavingsPlansOfferingsResponse
	InternalServerException               *interface{}
	StatusCode                            int64
	ValidationException                   *interface{}
}
