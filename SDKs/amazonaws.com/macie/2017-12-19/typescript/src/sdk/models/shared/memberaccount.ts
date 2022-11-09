import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MemberAccount
/** 
 * Contains information about the Amazon Macie Classic member account.
**/
export class MemberAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;
}
