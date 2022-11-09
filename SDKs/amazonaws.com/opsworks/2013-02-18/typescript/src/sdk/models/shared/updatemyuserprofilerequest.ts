import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateMyUserProfileRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=SshPublicKey" })
  sshPublicKey?: string;
}
