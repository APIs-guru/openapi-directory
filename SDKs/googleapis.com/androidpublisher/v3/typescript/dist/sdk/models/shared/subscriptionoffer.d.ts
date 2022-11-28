import { SpeakeasyBase } from "../../../internal/utils";
import { OfferTag } from "./offertag";
import { OtherRegionsSubscriptionOfferConfig } from "./otherregionssubscriptionofferconfig";
import { SubscriptionOfferPhase } from "./subscriptionofferphase";
import { RegionalSubscriptionOfferConfig } from "./regionalsubscriptionofferconfig";
import { SubscriptionOfferTargeting } from "./subscriptionoffertargeting";
export declare enum SubscriptionOfferStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Draft = "DRAFT",
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}
/**
 * A single, temporary offer
**/
export declare class SubscriptionOfferInput extends SpeakeasyBase {
    basePlanId?: string;
    offerId?: string;
    offerTags?: OfferTag[];
    otherRegionsConfig?: OtherRegionsSubscriptionOfferConfig;
    packageName?: string;
    phases?: SubscriptionOfferPhase[];
    productId?: string;
    regionalConfigs?: RegionalSubscriptionOfferConfig[];
    targeting?: SubscriptionOfferTargeting;
}
/**
 * A single, temporary offer
**/
export declare class SubscriptionOffer extends SpeakeasyBase {
    basePlanId?: string;
    offerId?: string;
    offerTags?: OfferTag[];
    otherRegionsConfig?: OtherRegionsSubscriptionOfferConfig;
    packageName?: string;
    phases?: SubscriptionOfferPhase[];
    productId?: string;
    regionalConfigs?: RegionalSubscriptionOfferConfig[];
    state?: SubscriptionOfferStateEnum;
    targeting?: SubscriptionOfferTargeting;
}
