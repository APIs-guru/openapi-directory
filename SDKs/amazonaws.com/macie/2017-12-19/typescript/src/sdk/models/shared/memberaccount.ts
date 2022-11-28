import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MemberAccount
/** 
 * Contains information about the Amazon Macie Classic member account.
**/
export class MemberAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;
}
