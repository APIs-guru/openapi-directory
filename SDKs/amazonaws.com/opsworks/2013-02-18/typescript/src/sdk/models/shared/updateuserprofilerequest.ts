import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateUserProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowSelfManagement" })
  allowSelfManagement?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IamUserArn" })
  iamUserArn: string;

  @SpeakeasyMetadata({ data: "json, name=SshPublicKey" })
  sshPublicKey?: string;

  @SpeakeasyMetadata({ data: "json, name=SshUsername" })
  sshUsername?: string;
}
