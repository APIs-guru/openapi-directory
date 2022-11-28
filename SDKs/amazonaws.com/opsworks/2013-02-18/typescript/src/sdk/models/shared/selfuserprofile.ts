import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SelfUserProfile
/** 
 * Describes a user's SSH information.
**/
export class SelfUserProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IamUserArn" })
  iamUserArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SshPublicKey" })
  sshPublicKey?: string;

  @SpeakeasyMetadata({ data: "json, name=SshUsername" })
  sshUsername?: string;
}
