import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FrequencyCap } from "./frequencycap";


export enum DeliveryControlCompanionDeliveryTypeEnum {
    CompanionDeliveryTypeUnspecified = "COMPANION_DELIVERY_TYPE_UNSPECIFIED",
    DeliveryOptional = "DELIVERY_OPTIONAL",
    DeliveryAtLeastOne = "DELIVERY_AT_LEAST_ONE",
    DeliveryAll = "DELIVERY_ALL"
}

export enum DeliveryControlCreativeRotationTypeEnum {
    CreativeRotationTypeUnspecified = "CREATIVE_ROTATION_TYPE_UNSPECIFIED",
    RotationEven = "ROTATION_EVEN",
    RotationOptimized = "ROTATION_OPTIMIZED",
    RotationManual = "ROTATION_MANUAL",
    RotationSequential = "ROTATION_SEQUENTIAL"
}

export enum DeliveryControlDeliveryRateTypeEnum {
    DeliveryRateTypeUnspecified = "DELIVERY_RATE_TYPE_UNSPECIFIED",
    Evenly = "EVENLY",
    FrontLoaded = "FRONT_LOADED",
    AsFastAsPossible = "AS_FAST_AS_POSSIBLE"
}

export enum DeliveryControlRoadblockingTypeEnum {
    RoadblockingTypeUnspecified = "ROADBLOCKING_TYPE_UNSPECIFIED",
    OnlyOne = "ONLY_ONE",
    OneOrMore = "ONE_OR_MORE",
    AsManyAsPossible = "AS_MANY_AS_POSSIBLE",
    AllRoadblock = "ALL_ROADBLOCK",
    CreativeSet = "CREATIVE_SET"
}


// DeliveryControl
/** 
 * Message contains details about how the deal will be paced.
**/
export class DeliveryControl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companionDeliveryType" })
  companionDeliveryType?: DeliveryControlCompanionDeliveryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=creativeRotationType" })
  creativeRotationType?: DeliveryControlCreativeRotationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=deliveryRateType" })
  deliveryRateType?: DeliveryControlDeliveryRateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=frequencyCap", elemType: FrequencyCap })
  frequencyCap?: FrequencyCap[];

  @SpeakeasyMetadata({ data: "json, name=roadblockingType" })
  roadblockingType?: DeliveryControlRoadblockingTypeEnum;
}
