import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * Configuration for a base plan specific to a region.
**/
export declare class RegionalBasePlanConfig extends SpeakeasyBase {
    newSubscriberAvailability?: boolean;
    price?: Money;
    regionCode?: string;
}
