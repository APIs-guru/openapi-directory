import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EbayFulfillmentProgram
/** 
 * This type is used to provide details about an order line item being fulfilled by eBay or an eBay fulfillment partner.
**/
export class EbayFulfillmentProgram extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fulfilledBy" })
  fulfilledBy?: string;
}
