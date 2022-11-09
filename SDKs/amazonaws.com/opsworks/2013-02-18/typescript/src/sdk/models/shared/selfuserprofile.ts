import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SelfUserProfile
/** 
 * Describes a user's SSH information.
**/
export class SelfUserProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=IamUserArn" })
  iamUserArn?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SshPublicKey" })
  sshPublicKey?: string;

  @Metadata({ data: "json, name=SshUsername" })
  sshUsername?: string;
}
