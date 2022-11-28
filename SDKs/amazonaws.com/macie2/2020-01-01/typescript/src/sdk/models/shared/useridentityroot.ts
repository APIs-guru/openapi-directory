import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserIdentityRoot
/** 
 * Provides information about an Amazon Web Services account and entity that performed an action on an affected resource. The action was performed using the credentials for your Amazon Web Services account.
**/
export class UserIdentityRoot extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=principalId" })
  principalId?: string;
}
