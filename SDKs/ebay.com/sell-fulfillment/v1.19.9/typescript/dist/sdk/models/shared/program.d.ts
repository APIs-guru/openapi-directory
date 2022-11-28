import { SpeakeasyBase } from "../../../internal/utils";
import { PostSaleAuthenticationProgram } from "./postsaleauthenticationprogram";
import { EbayFulfillmentProgram } from "./ebayfulfillmentprogram";
/**
 * This type is returned for order line items eligible for the Authenticity Guarantee service and/or for order line items fulfilled by the eBay Fulfillment program.
**/
export declare class Program extends SpeakeasyBase {
    authenticityVerification?: PostSaleAuthenticationProgram;
    fulfillmentProgram?: EbayFulfillmentProgram;
}
