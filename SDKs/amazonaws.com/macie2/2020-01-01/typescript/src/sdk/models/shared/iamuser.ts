import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IamUser
/** 
 * Provides information about an Identity and Access Management (IAM) user who performed an action on an affected resource.
**/
export class IamUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=principalId" })
  principalId?: string;

  @Metadata({ data: "json, name=userName" })
  userName?: string;
}
