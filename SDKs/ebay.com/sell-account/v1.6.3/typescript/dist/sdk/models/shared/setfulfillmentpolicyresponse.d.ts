import { SpeakeasyBase } from "../../../internal/utils";
import { CategoryType } from "./categorytype";
import { TimeDuration } from "./timeduration";
import { RegionSet } from "./regionset";
import { ShippingOption } from "./shippingoption";
import { Error } from "./error";
/**
 * Complex type that that gets populated with a response containing a fulfillment policy.
**/
export declare class SetFulfillmentPolicyResponse extends SpeakeasyBase {
    categoryTypes?: CategoryType[];
    description?: string;
    freightShipping?: boolean;
    fulfillmentPolicyId?: string;
    globalShipping?: boolean;
    handlingTime?: TimeDuration;
    localPickup?: boolean;
    marketplaceId?: string;
    name?: string;
    pickupDropOff?: boolean;
    shipToLocations?: RegionSet;
    shippingOptions?: ShippingOption[];
    warnings?: Error[];
}
