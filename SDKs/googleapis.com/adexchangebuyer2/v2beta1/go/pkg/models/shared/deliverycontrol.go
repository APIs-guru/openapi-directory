package shared

type DeliveryControlCreativeBlockingLevelEnum string

const (
	DeliveryControlCreativeBlockingLevelEnumCreativeBlockingLevelUnspecified DeliveryControlCreativeBlockingLevelEnum = "CREATIVE_BLOCKING_LEVEL_UNSPECIFIED"
	DeliveryControlCreativeBlockingLevelEnumPublisherBlockingRules           DeliveryControlCreativeBlockingLevelEnum = "PUBLISHER_BLOCKING_RULES"
	DeliveryControlCreativeBlockingLevelEnumAdxPolicyBlockingOnly            DeliveryControlCreativeBlockingLevelEnum = "ADX_POLICY_BLOCKING_ONLY"
)

type DeliveryControlDeliveryRateTypeEnum string

const (
	DeliveryControlDeliveryRateTypeEnumDeliveryRateTypeUnspecified DeliveryControlDeliveryRateTypeEnum = "DELIVERY_RATE_TYPE_UNSPECIFIED"
	DeliveryControlDeliveryRateTypeEnumEvenly                      DeliveryControlDeliveryRateTypeEnum = "EVENLY"
	DeliveryControlDeliveryRateTypeEnumFrontLoaded                 DeliveryControlDeliveryRateTypeEnum = "FRONT_LOADED"
	DeliveryControlDeliveryRateTypeEnumAsFastAsPossible            DeliveryControlDeliveryRateTypeEnum = "AS_FAST_AS_POSSIBLE"
)

type DeliveryControl struct {
	CreativeBlockingLevel *DeliveryControlCreativeBlockingLevelEnum `json:"creativeBlockingLevel"`
	DeliveryRateType      *DeliveryControlDeliveryRateTypeEnum      `json:"deliveryRateType"`
	FrequencyCaps         []FrequencyCap                            `json:"frequencyCaps"`
}
