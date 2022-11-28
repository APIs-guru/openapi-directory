import { SpeakeasyBase } from "../../../internal/utils";
import { AutoRenewingBasePlanType } from "./autorenewingbaseplantype";
import { OfferTag } from "./offertag";
import { OtherRegionsBasePlanConfig } from "./otherregionsbaseplanconfig";
import { PrepaidBasePlanType } from "./prepaidbaseplantype";
import { RegionalBasePlanConfig } from "./regionalbaseplanconfig";
export declare enum BasePlanStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Draft = "DRAFT",
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}
/**
 * A single base plan for a subscription.
**/
export declare class BasePlanInput extends SpeakeasyBase {
    autoRenewingBasePlanType?: AutoRenewingBasePlanType;
    basePlanId?: string;
    offerTags?: OfferTag[];
    otherRegionsConfig?: OtherRegionsBasePlanConfig;
    prepaidBasePlanType?: PrepaidBasePlanType;
    regionalConfigs?: RegionalBasePlanConfig[];
}
/**
 * A single base plan for a subscription.
**/
export declare class BasePlan extends SpeakeasyBase {
    autoRenewingBasePlanType?: AutoRenewingBasePlanType;
    basePlanId?: string;
    offerTags?: OfferTag[];
    otherRegionsConfig?: OtherRegionsBasePlanConfig;
    prepaidBasePlanType?: PrepaidBasePlanType;
    regionalConfigs?: RegionalBasePlanConfig[];
    state?: BasePlanStateEnum;
}
