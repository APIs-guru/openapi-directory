import { SpeakeasyBase } from "../../../internal/utils";
import { Credentials } from "./credentials";
import { FederatedUser } from "./federateduser";
/**
 * Contains the response to a successful <a>GetFederationToken</a> request, including temporary Amazon Web Services credentials that can be used to make Amazon Web Services requests.
**/
export declare class GetFederationTokenResponse extends SpeakeasyBase {
    credentials?: Credentials;
    federatedUser?: FederatedUser;
    packedPolicySize?: number;
}
