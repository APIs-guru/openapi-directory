import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UserIdentityRoot
/** 
 * Provides information about an Amazon Web Services account and entity that performed an action on an affected resource. The action was performed using the credentials for your Amazon Web Services account.
**/
export class UserIdentityRoot extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=principalId" })
  principalId?: string;
}
