import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Credentials } from "./credentials";
import { FederatedUser } from "./federateduser";



// GetFederationTokenResponse
/** 
 * Contains the response to a successful <a>GetFederationToken</a> request, including temporary Amazon Web Services credentials that can be used to make Amazon Web Services requests. 
**/
export class GetFederationTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  credentials?: Credentials;

  @SpeakeasyMetadata()
  federatedUser?: FederatedUser;

  @SpeakeasyMetadata()
  packedPolicySize?: number;
}
