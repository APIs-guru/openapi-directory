import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteSshPublicKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ServerId" })
  serverId: string;

  @SpeakeasyMetadata({ data: "json, name=SshPublicKeyId" })
  sshPublicKeyId: string;

  @SpeakeasyMetadata({ data: "json, name=UserName" })
  userName: string;
}
