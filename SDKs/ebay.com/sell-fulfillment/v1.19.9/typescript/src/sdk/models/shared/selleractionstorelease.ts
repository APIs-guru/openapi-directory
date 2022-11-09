import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SellerActionsToRelease
/** 
 * This type is used to state possible action(s) that a seller can take to release a payment hold placed against an order.
**/
export class SellerActionsToRelease extends SpeakeasyBase {
  @Metadata({ data: "json, name=sellerActionToRelease" })
  sellerActionToRelease?: string;
}
