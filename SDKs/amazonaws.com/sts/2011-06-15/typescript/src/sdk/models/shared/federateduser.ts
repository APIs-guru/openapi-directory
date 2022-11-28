import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FederatedUser
/** 
 * Identifiers for the federated user that is associated with the credentials.
**/
export class FederatedUser extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn: string;

  @SpeakeasyMetadata()
  federatedUserId: string;
}
