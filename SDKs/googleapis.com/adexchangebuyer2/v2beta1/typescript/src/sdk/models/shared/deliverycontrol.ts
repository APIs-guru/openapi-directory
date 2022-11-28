import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FrequencyCap } from "./frequencycap";


export enum DeliveryControlCreativeBlockingLevelEnum {
    CreativeBlockingLevelUnspecified = "CREATIVE_BLOCKING_LEVEL_UNSPECIFIED",
    PublisherBlockingRules = "PUBLISHER_BLOCKING_RULES",
    AdxPolicyBlockingOnly = "ADX_POLICY_BLOCKING_ONLY"
}

export enum DeliveryControlDeliveryRateTypeEnum {
    DeliveryRateTypeUnspecified = "DELIVERY_RATE_TYPE_UNSPECIFIED",
    Evenly = "EVENLY",
    FrontLoaded = "FRONT_LOADED",
    AsFastAsPossible = "AS_FAST_AS_POSSIBLE"
}


// DeliveryControl
/** 
 * Message contains details about how the deals will be paced.
**/
export class DeliveryControl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creativeBlockingLevel" })
  creativeBlockingLevel?: DeliveryControlCreativeBlockingLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=deliveryRateType" })
  deliveryRateType?: DeliveryControlDeliveryRateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=frequencyCaps", elemType: FrequencyCap })
  frequencyCaps?: FrequencyCap[];
}
