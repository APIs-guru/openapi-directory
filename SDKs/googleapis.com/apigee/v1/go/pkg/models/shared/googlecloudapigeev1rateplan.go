package shared

type GoogleCloudApigeeV1RatePlanBillingPeriodEnum string

const (
	GoogleCloudApigeeV1RatePlanBillingPeriodEnumBillingPeriodUnspecified GoogleCloudApigeeV1RatePlanBillingPeriodEnum = "BILLING_PERIOD_UNSPECIFIED"
	GoogleCloudApigeeV1RatePlanBillingPeriodEnumWeekly                   GoogleCloudApigeeV1RatePlanBillingPeriodEnum = "WEEKLY"
	GoogleCloudApigeeV1RatePlanBillingPeriodEnumMonthly                  GoogleCloudApigeeV1RatePlanBillingPeriodEnum = "MONTHLY"
)

type GoogleCloudApigeeV1RatePlanConsumptionPricingTypeEnum string

const (
	GoogleCloudApigeeV1RatePlanConsumptionPricingTypeEnumConsumptionPricingTypeUnspecified GoogleCloudApigeeV1RatePlanConsumptionPricingTypeEnum = "CONSUMPTION_PRICING_TYPE_UNSPECIFIED"
	GoogleCloudApigeeV1RatePlanConsumptionPricingTypeEnumFixedPerUnit                      GoogleCloudApigeeV1RatePlanConsumptionPricingTypeEnum = "FIXED_PER_UNIT"
	GoogleCloudApigeeV1RatePlanConsumptionPricingTypeEnumBanded                            GoogleCloudApigeeV1RatePlanConsumptionPricingTypeEnum = "BANDED"
	GoogleCloudApigeeV1RatePlanConsumptionPricingTypeEnumTiered                            GoogleCloudApigeeV1RatePlanConsumptionPricingTypeEnum = "TIERED"
	GoogleCloudApigeeV1RatePlanConsumptionPricingTypeEnumStairstep                         GoogleCloudApigeeV1RatePlanConsumptionPricingTypeEnum = "STAIRSTEP"
)

type GoogleCloudApigeeV1RatePlanPaymentFundingModelEnum string

const (
	GoogleCloudApigeeV1RatePlanPaymentFundingModelEnumPaymentFundingModelUnspecified GoogleCloudApigeeV1RatePlanPaymentFundingModelEnum = "PAYMENT_FUNDING_MODEL_UNSPECIFIED"
	GoogleCloudApigeeV1RatePlanPaymentFundingModelEnumPrepaid                        GoogleCloudApigeeV1RatePlanPaymentFundingModelEnum = "PREPAID"
	GoogleCloudApigeeV1RatePlanPaymentFundingModelEnumPostpaid                       GoogleCloudApigeeV1RatePlanPaymentFundingModelEnum = "POSTPAID"
)

type GoogleCloudApigeeV1RatePlanRevenueShareTypeEnum string

const (
	GoogleCloudApigeeV1RatePlanRevenueShareTypeEnumRevenueShareTypeUnspecified GoogleCloudApigeeV1RatePlanRevenueShareTypeEnum = "REVENUE_SHARE_TYPE_UNSPECIFIED"
	GoogleCloudApigeeV1RatePlanRevenueShareTypeEnumFixed                       GoogleCloudApigeeV1RatePlanRevenueShareTypeEnum = "FIXED"
	GoogleCloudApigeeV1RatePlanRevenueShareTypeEnumVolumeBanded                GoogleCloudApigeeV1RatePlanRevenueShareTypeEnum = "VOLUME_BANDED"
)

type GoogleCloudApigeeV1RatePlanStateEnum string

const (
	GoogleCloudApigeeV1RatePlanStateEnumStateUnspecified GoogleCloudApigeeV1RatePlanStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudApigeeV1RatePlanStateEnumDraft            GoogleCloudApigeeV1RatePlanStateEnum = "DRAFT"
	GoogleCloudApigeeV1RatePlanStateEnumPublished        GoogleCloudApigeeV1RatePlanStateEnum = "PUBLISHED"
)

type GoogleCloudApigeeV1RatePlan struct {
	Apiproduct              *string                                                `json:"apiproduct,omitempty"`
	BillingPeriod           *GoogleCloudApigeeV1RatePlanBillingPeriodEnum          `json:"billingPeriod,omitempty"`
	ConsumptionPricingRates []GoogleCloudApigeeV1RateRange                         `json:"consumptionPricingRates,omitempty"`
	ConsumptionPricingType  *GoogleCloudApigeeV1RatePlanConsumptionPricingTypeEnum `json:"consumptionPricingType,omitempty"`
	CreatedAt               *string                                                `json:"createdAt,omitempty"`
	CurrencyCode            *string                                                `json:"currencyCode,omitempty"`
	Description             *string                                                `json:"description,omitempty"`
	DisplayName             *string                                                `json:"displayName,omitempty"`
	EndTime                 *string                                                `json:"endTime,omitempty"`
	FixedFeeFrequency       *int32                                                 `json:"fixedFeeFrequency,omitempty"`
	FixedRecurringFee       *GoogleTypeMoney                                       `json:"fixedRecurringFee,omitempty"`
	LastModifiedAt          *string                                                `json:"lastModifiedAt,omitempty"`
	Name                    *string                                                `json:"name,omitempty"`
	PaymentFundingModel     *GoogleCloudApigeeV1RatePlanPaymentFundingModelEnum    `json:"paymentFundingModel,omitempty"`
	RevenueShareRates       []GoogleCloudApigeeV1RevenueShareRange                 `json:"revenueShareRates,omitempty"`
	RevenueShareType        *GoogleCloudApigeeV1RatePlanRevenueShareTypeEnum       `json:"revenueShareType,omitempty"`
	SetupFee                *GoogleTypeMoney                                       `json:"setupFee,omitempty"`
	StartTime               *string                                                `json:"startTime,omitempty"`
	State                   *GoogleCloudApigeeV1RatePlanStateEnum                  `json:"state,omitempty"`
}
