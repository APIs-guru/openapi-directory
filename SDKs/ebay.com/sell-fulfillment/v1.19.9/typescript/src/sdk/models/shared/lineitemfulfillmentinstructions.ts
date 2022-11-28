import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LineItemFulfillmentInstructions
/** 
 * This type contains the specifications for processing the fulfillment of a line item, including the handling window and the delivery window. These fields provide guidance for eBay Guaranteed Delivery as well as for non-guaranteed delivery.
**/
export class LineItemFulfillmentInstructions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=guaranteedDelivery" })
  guaranteedDelivery?: boolean;

  @SpeakeasyMetadata({ data: "json, name=maxEstimatedDeliveryDate" })
  maxEstimatedDeliveryDate?: string;

  @SpeakeasyMetadata({ data: "json, name=minEstimatedDeliveryDate" })
  minEstimatedDeliveryDate?: string;

  @SpeakeasyMetadata({ data: "json, name=shipByDate" })
  shipByDate?: string;
}
