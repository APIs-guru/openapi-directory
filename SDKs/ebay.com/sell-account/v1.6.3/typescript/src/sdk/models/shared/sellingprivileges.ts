import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SellingLimit } from "./sellinglimit";



// SellingPrivileges
/** 
 * A merchant's selling limit, and the status of their account registration.
**/
export class SellingPrivileges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sellerRegistrationCompleted" })
  sellerRegistrationCompleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sellingLimit" })
  sellingLimit?: SellingLimit;
}
