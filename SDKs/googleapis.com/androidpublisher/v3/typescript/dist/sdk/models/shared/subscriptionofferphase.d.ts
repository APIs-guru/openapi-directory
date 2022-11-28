import { SpeakeasyBase } from "../../../internal/utils";
import { OtherRegionsSubscriptionOfferPhaseConfig } from "./otherregionssubscriptionofferphaseconfig";
import { RegionalSubscriptionOfferPhaseConfig } from "./regionalsubscriptionofferphaseconfig";
/**
 * A single phase of a subscription offer.
**/
export declare class SubscriptionOfferPhase extends SpeakeasyBase {
    duration?: string;
    otherRegionsConfig?: OtherRegionsSubscriptionOfferPhaseConfig;
    recurrenceCount?: number;
    regionalConfigs?: RegionalSubscriptionOfferPhaseConfig[];
}
