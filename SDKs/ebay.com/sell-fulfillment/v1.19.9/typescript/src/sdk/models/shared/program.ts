import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PostSaleAuthenticationProgram } from "./postsaleauthenticationprogram";
import { EbayFulfillmentProgram } from "./ebayfulfillmentprogram";


// Program
/** 
 * This type is returned for order line items eligible for the Authenticity Guarantee service and/or for order line items fulfilled by the eBay Fulfillment program.
**/
export class Program extends SpeakeasyBase {
  @Metadata({ data: "json, name=authenticityVerification" })
  authenticityVerification?: PostSaleAuthenticationProgram;

  @Metadata({ data: "json, name=fulfillmentProgram" })
  fulfillmentProgram?: EbayFulfillmentProgram;
}
