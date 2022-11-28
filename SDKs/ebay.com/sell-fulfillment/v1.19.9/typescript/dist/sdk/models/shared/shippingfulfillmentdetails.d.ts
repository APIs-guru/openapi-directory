import { SpeakeasyBase } from "../../../internal/utils";
import { LineItemReference } from "./lineitemreference";
/**
 * This type contains the details for creating a fulfillment for an order.
**/
export declare class ShippingFulfillmentDetails extends SpeakeasyBase {
    lineItems?: LineItemReference[];
    shippedDate?: string;
    shippingCarrierCode?: string;
    trackingNumber?: string;
}
