import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LineItemFulfillmentInstructions
/** 
 * This type contains the specifications for processing the fulfillment of a line item, including the handling window and the delivery window. These fields provide guidance for eBay Guaranteed Delivery as well as for non-guaranteed delivery.
**/
export class LineItemFulfillmentInstructions extends SpeakeasyBase {
  @Metadata({ data: "json, name=guaranteedDelivery" })
  guaranteedDelivery?: boolean;

  @Metadata({ data: "json, name=maxEstimatedDeliveryDate" })
  maxEstimatedDeliveryDate?: string;

  @Metadata({ data: "json, name=minEstimatedDeliveryDate" })
  minEstimatedDeliveryDate?: string;

  @Metadata({ data: "json, name=shipByDate" })
  shipByDate?: string;
}
