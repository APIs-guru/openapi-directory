import { SpeakeasyBase } from "../../../internal/utils";
import { OtherRegionsSubscriptionOfferPhasePrices } from "./otherregionssubscriptionofferphaseprices";
/**
 * Configuration for any new locations Play may launch in for a single offer phase.
**/
export declare class OtherRegionsSubscriptionOfferPhaseConfig extends SpeakeasyBase {
    absoluteDiscounts?: OtherRegionsSubscriptionOfferPhasePrices;
    otherRegionsPrices?: OtherRegionsSubscriptionOfferPhasePrices;
    relativeDiscount?: number;
}
