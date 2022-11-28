import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * Configuration for a single phase of a subscription offer in a single region.
**/
export declare class RegionalSubscriptionOfferPhaseConfig extends SpeakeasyBase {
    absoluteDiscount?: Money;
    price?: Money;
    regionCode?: string;
    relativeDiscount?: number;
}
