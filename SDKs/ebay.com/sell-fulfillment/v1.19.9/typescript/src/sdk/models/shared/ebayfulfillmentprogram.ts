import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EbayFulfillmentProgram
/** 
 * This type is used to provide details about an order line item being fulfilled by eBay or an eBay fulfillment partner.
**/
export class EbayFulfillmentProgram extends SpeakeasyBase {
  @Metadata({ data: "json, name=fulfilledBy" })
  fulfilledBy?: string;
}
