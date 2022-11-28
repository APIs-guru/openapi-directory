import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * Pricing information for any new locations Play may launch in.
**/
export declare class OtherRegionsBasePlanConfig extends SpeakeasyBase {
    eurPrice?: Money;
    newSubscriberAvailability?: boolean;
    usdPrice?: Money;
}
