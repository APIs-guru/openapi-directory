import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SessionContext } from "./sessioncontext";


// FederatedUser
/** 
 * Provides information about an identity that performed an action on an affected resource by using temporary security credentials. The credentials were obtained using the GetFederationToken operation of the Security Token Service (STS) API.
**/
export class FederatedUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessKeyId" })
  accessKeyId?: string;

  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=principalId" })
  principalId?: string;

  @Metadata({ data: "json, name=sessionContext" })
  sessionContext?: SessionContext;
}
