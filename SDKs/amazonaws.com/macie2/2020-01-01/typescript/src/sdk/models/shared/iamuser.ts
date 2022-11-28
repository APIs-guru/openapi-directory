import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IamUser
/** 
 * Provides information about an Identity and Access Management (IAM) user who performed an action on an affected resource.
**/
export class IamUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=principalId" })
  principalId?: string;

  @SpeakeasyMetadata({ data: "json, name=userName" })
  userName?: string;
}
