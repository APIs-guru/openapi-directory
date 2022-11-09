import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteSshPublicKeyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ServerId" })
  serverId: string;

  @Metadata({ data: "json, name=SshPublicKeyId" })
  sshPublicKeyId: string;

  @Metadata({ data: "json, name=UserName" })
  userName: string;
}
