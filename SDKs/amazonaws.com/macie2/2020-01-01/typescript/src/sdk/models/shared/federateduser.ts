import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SessionContext } from "./sessioncontext";



// FederatedUser
/** 
 * Provides information about an identity that performed an action on an affected resource by using temporary security credentials. The credentials were obtained using the GetFederationToken operation of the Security Token Service (STS) API.
**/
export class FederatedUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessKeyId" })
  accessKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=principalId" })
  principalId?: string;

  @SpeakeasyMetadata({ data: "json, name=sessionContext" })
  sessionContext?: SessionContext;
}
