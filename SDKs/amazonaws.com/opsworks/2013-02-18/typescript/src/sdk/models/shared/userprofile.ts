import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UserProfile
/** 
 * Describes a user's SSH information.
**/
export class UserProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllowSelfManagement" })
  allowSelfManagement?: boolean;

  @Metadata({ data: "json, name=IamUserArn" })
  iamUserArn?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SshPublicKey" })
  sshPublicKey?: string;

  @Metadata({ data: "json, name=SshUsername" })
  sshUsername?: string;
}
