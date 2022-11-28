package shared

type DeliveryControlCompanionDeliveryTypeEnum string

const (
	DeliveryControlCompanionDeliveryTypeEnumCompanionDeliveryTypeUnspecified DeliveryControlCompanionDeliveryTypeEnum = "COMPANION_DELIVERY_TYPE_UNSPECIFIED"
	DeliveryControlCompanionDeliveryTypeEnumDeliveryOptional                 DeliveryControlCompanionDeliveryTypeEnum = "DELIVERY_OPTIONAL"
	DeliveryControlCompanionDeliveryTypeEnumDeliveryAtLeastOne               DeliveryControlCompanionDeliveryTypeEnum = "DELIVERY_AT_LEAST_ONE"
	DeliveryControlCompanionDeliveryTypeEnumDeliveryAll                      DeliveryControlCompanionDeliveryTypeEnum = "DELIVERY_ALL"
)

type DeliveryControlCreativeRotationTypeEnum string

const (
	DeliveryControlCreativeRotationTypeEnumCreativeRotationTypeUnspecified DeliveryControlCreativeRotationTypeEnum = "CREATIVE_ROTATION_TYPE_UNSPECIFIED"
	DeliveryControlCreativeRotationTypeEnumRotationEven                    DeliveryControlCreativeRotationTypeEnum = "ROTATION_EVEN"
	DeliveryControlCreativeRotationTypeEnumRotationOptimized               DeliveryControlCreativeRotationTypeEnum = "ROTATION_OPTIMIZED"
	DeliveryControlCreativeRotationTypeEnumRotationManual                  DeliveryControlCreativeRotationTypeEnum = "ROTATION_MANUAL"
	DeliveryControlCreativeRotationTypeEnumRotationSequential              DeliveryControlCreativeRotationTypeEnum = "ROTATION_SEQUENTIAL"
)

type DeliveryControlDeliveryRateTypeEnum string

const (
	DeliveryControlDeliveryRateTypeEnumDeliveryRateTypeUnspecified DeliveryControlDeliveryRateTypeEnum = "DELIVERY_RATE_TYPE_UNSPECIFIED"
	DeliveryControlDeliveryRateTypeEnumEvenly                      DeliveryControlDeliveryRateTypeEnum = "EVENLY"
	DeliveryControlDeliveryRateTypeEnumFrontLoaded                 DeliveryControlDeliveryRateTypeEnum = "FRONT_LOADED"
	DeliveryControlDeliveryRateTypeEnumAsFastAsPossible            DeliveryControlDeliveryRateTypeEnum = "AS_FAST_AS_POSSIBLE"
)

type DeliveryControlRoadblockingTypeEnum string

const (
	DeliveryControlRoadblockingTypeEnumRoadblockingTypeUnspecified DeliveryControlRoadblockingTypeEnum = "ROADBLOCKING_TYPE_UNSPECIFIED"
	DeliveryControlRoadblockingTypeEnumOnlyOne                     DeliveryControlRoadblockingTypeEnum = "ONLY_ONE"
	DeliveryControlRoadblockingTypeEnumOneOrMore                   DeliveryControlRoadblockingTypeEnum = "ONE_OR_MORE"
	DeliveryControlRoadblockingTypeEnumAsManyAsPossible            DeliveryControlRoadblockingTypeEnum = "AS_MANY_AS_POSSIBLE"
	DeliveryControlRoadblockingTypeEnumAllRoadblock                DeliveryControlRoadblockingTypeEnum = "ALL_ROADBLOCK"
	DeliveryControlRoadblockingTypeEnumCreativeSet                 DeliveryControlRoadblockingTypeEnum = "CREATIVE_SET"
)

// DeliveryControl
// Message contains details about how the deal will be paced.
type DeliveryControl struct {
	CompanionDeliveryType *DeliveryControlCompanionDeliveryTypeEnum `json:"companionDeliveryType,omitempty"`
	CreativeRotationType  *DeliveryControlCreativeRotationTypeEnum  `json:"creativeRotationType,omitempty"`
	DeliveryRateType      *DeliveryControlDeliveryRateTypeEnum      `json:"deliveryRateType,omitempty"`
	FrequencyCap          []FrequencyCap                            `json:"frequencyCap,omitempty"`
	RoadblockingType      *DeliveryControlRoadblockingTypeEnum      `json:"roadblockingType,omitempty"`
}
