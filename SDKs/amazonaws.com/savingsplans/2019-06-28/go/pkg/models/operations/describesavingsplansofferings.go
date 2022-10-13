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
	Currencies     []shared.CurrencyCodeEnum                                `json:"currencies"`
	Descriptions   []string                                                 `json:"descriptions"`
	Durations      []int64                                                  `json:"durations"`
	Filters        []shared.SavingsPlanOfferingFilterElement                `json:"filters"`
	MaxResults     *int64                                                   `json:"maxResults"`
	NextToken      *string                                                  `json:"nextToken"`
	OfferingIds    []string                                                 `json:"offeringIds"`
	Operations     []string                                                 `json:"operations"`
	PaymentOptions []shared.SavingsPlanPaymentOptionEnum                    `json:"paymentOptions"`
	PlanTypes      []shared.SavingsPlanTypeEnum                             `json:"planTypes"`
	ProductType    *DescribeSavingsPlansOfferingsRequestBodyProductTypeEnum `json:"productType"`
	ServiceCodes   []string                                                 `json:"serviceCodes"`
	UsageTypes     []string                                                 `json:"usageTypes"`
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
