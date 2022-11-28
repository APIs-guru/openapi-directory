import { SpeakeasyBase } from "../../../internal/utils";
import { LineItemReference } from "./lineitemreference";
/**
 * This type contains the complete details of an existing fulfillment for an order.
**/
export declare class ShippingFulfillment extends SpeakeasyBase {
    fulfillmentId?: string;
    lineItems?: LineItemReference[];
    shipmentTrackingNumber?: string;
    shippedDate?: string;
    shippingCarrierCode?: string;
}
