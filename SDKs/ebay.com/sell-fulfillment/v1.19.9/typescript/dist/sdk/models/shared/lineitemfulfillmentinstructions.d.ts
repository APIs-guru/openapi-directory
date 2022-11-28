import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type contains the specifications for processing the fulfillment of a line item, including the handling window and the delivery window. These fields provide guidance for eBay Guaranteed Delivery as well as for non-guaranteed delivery.
**/
export declare class LineItemFulfillmentInstructions extends SpeakeasyBase {
    guaranteedDelivery?: boolean;
    maxEstimatedDeliveryDate?: string;
    minEstimatedDeliveryDate?: string;
    shipByDate?: string;
}
