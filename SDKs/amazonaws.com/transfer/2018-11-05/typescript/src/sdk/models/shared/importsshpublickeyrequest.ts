import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImportSshPublicKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ServerId" })
  serverId: string;

  @SpeakeasyMetadata({ data: "json, name=SshPublicKeyBody" })
  sshPublicKeyBody: string;

  @SpeakeasyMetadata({ data: "json, name=UserName" })
  userName: string;
}
