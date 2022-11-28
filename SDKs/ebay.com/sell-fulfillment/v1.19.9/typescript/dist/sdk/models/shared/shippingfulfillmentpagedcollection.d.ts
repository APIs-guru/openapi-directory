import { SpeakeasyBase } from "../../../internal/utils";
import { ShippingFulfillment } from "./shippingfulfillment";
import { Error } from "./error";
/**
 * This type contains the specifications for the entire collection of shipping fulfillments that are associated with the order specified by a getShippingFulfillments call. The fulfillments container returns an array of all the fulfillments in the collection.
**/
export declare class ShippingFulfillmentPagedCollection extends SpeakeasyBase {
    fulfillments?: ShippingFulfillment[];
    total?: number;
    warnings?: Error[];
}
