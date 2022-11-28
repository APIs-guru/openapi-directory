import { SpeakeasyBase } from "../../../internal/utils";
import { FrequencyCap } from "./frequencycap";
export declare enum DeliveryControlCreativeBlockingLevelEnum {
    CreativeBlockingLevelUnspecified = "CREATIVE_BLOCKING_LEVEL_UNSPECIFIED",
    PublisherBlockingRules = "PUBLISHER_BLOCKING_RULES",
    AdxPolicyBlockingOnly = "ADX_POLICY_BLOCKING_ONLY"
}
export declare enum DeliveryControlDeliveryRateTypeEnum {
    DeliveryRateTypeUnspecified = "DELIVERY_RATE_TYPE_UNSPECIFIED",
    Evenly = "EVENLY",
    FrontLoaded = "FRONT_LOADED",
    AsFastAsPossible = "AS_FAST_AS_POSSIBLE"
}
/**
 * Message contains details about how the deals will be paced.
**/
export declare class DeliveryControl extends SpeakeasyBase {
    creativeBlockingLevel?: DeliveryControlCreativeBlockingLevelEnum;
    deliveryRateType?: DeliveryControlDeliveryRateTypeEnum;
    frequencyCaps?: FrequencyCap[];
}
