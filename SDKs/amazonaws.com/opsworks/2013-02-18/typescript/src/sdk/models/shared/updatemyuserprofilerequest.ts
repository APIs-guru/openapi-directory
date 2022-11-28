import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateMyUserProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SshPublicKey" })
  sshPublicKey?: string;
}
