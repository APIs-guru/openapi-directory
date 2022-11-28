import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Membership } from "./membership";



// MembershipList
/** 
 * Memberships List
**/
export class MembershipList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=memberships", elemType: Membership })
  memberships: Membership[];

  @SpeakeasyMetadata({ data: "json, name=sum" })
  sum: number;
}
