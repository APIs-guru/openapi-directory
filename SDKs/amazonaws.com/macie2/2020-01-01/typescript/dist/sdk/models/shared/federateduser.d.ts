import { SpeakeasyBase } from "../../../internal/utils";
import { SessionContext } from "./sessioncontext";
/**
 * Provides information about an identity that performed an action on an affected resource by using temporary security credentials. The credentials were obtained using the GetFederationToken operation of the Security Token Service (STS) API.
**/
export declare class FederatedUser extends SpeakeasyBase {
    accessKeyId?: string;
    accountId?: string;
    arn?: string;
    principalId?: string;
    sessionContext?: SessionContext;
}
