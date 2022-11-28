import { SpeakeasyBase } from "../../../internal/utils";
import { CategoryType } from "./categorytype";
import { TimeDuration } from "./timeduration";
import { RegionSet } from "./regionset";
import { ShippingOption } from "./shippingoption";
/**
 * This root response container defines a seller's fulfillment policy for a specific marketplace and category type. fulfillmentPolicy encapsulates a seller's terms for fulfilling an order and includes the shipping carriers and services used for shipment and time the seller takes to ship an order. While each seller must define at least one fulfillment policy for every marketplace into which they sell, sellers can define multiple fulfillment policies for a single marketplace by specifying different configurations for the unique policies.
**/
export declare class FulfillmentPolicy extends SpeakeasyBase {
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
}
