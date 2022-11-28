import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PostSaleAuthenticationProgram } from "./postsaleauthenticationprogram";
import { EbayFulfillmentProgram } from "./ebayfulfillmentprogram";



// Program
/** 
 * This type is returned for order line items eligible for the Authenticity Guarantee service and/or for order line items fulfilled by the eBay Fulfillment program.
**/
export class Program extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authenticityVerification" })
  authenticityVerification?: PostSaleAuthenticationProgram;

  @SpeakeasyMetadata({ data: "json, name=fulfillmentProgram" })
  fulfillmentProgram?: EbayFulfillmentProgram;
}
