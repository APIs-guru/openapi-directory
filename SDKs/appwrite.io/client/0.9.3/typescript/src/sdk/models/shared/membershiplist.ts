import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Membership } from "./membership";


// MembershipList
/** 
 * Memberships List
**/
export class MembershipList extends SpeakeasyBase {
  @Metadata({ data: "json, name=memberships", elemType: shared.Membership })
  memberships: Membership[];

  @Metadata({ data: "json, name=sum" })
  sum: number;
}
