import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsAccount
/** 
 * Provides information about an Amazon Web Services account and entity that performed an action on an affected resource. The action was performed using the credentials for an Amazon Web Services account other than your own account.
**/
export class AwsAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=principalId" })
  principalId?: string;
}
