import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SellerActionsToRelease
/** 
 * This type is used to state possible action(s) that a seller can take to release a payment hold placed against an order.
**/
export class SellerActionsToRelease extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sellerActionToRelease" })
  sellerActionToRelease?: string;
}
