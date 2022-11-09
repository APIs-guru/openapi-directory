import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SellingLimit } from "./sellinglimit";


// SellingPrivileges
/** 
 * A merchant's selling limit, and the status of their account registration.
**/
export class SellingPrivileges extends SpeakeasyBase {
  @Metadata({ data: "json, name=sellerRegistrationCompleted" })
  sellerRegistrationCompleted?: boolean;

  @Metadata({ data: "json, name=sellingLimit" })
  sellingLimit?: SellingLimit;
}
