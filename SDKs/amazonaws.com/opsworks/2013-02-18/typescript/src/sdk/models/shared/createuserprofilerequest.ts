import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateUserProfileRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllowSelfManagement" })
  allowSelfManagement?: boolean;

  @Metadata({ data: "json, name=IamUserArn" })
  iamUserArn: string;

  @Metadata({ data: "json, name=SshPublicKey" })
  sshPublicKey?: string;

  @Metadata({ data: "json, name=SshUsername" })
  sshUsername?: string;
}
