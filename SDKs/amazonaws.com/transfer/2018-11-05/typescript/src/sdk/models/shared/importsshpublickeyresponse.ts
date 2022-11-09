import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ImportSshPublicKeyResponse
/** 
 * Identifies the user, the server they belong to, and the identifier of the SSH public key associated with that user. A user can have more than one key on each server that they are associated with.
**/
export class ImportSshPublicKeyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ServerId" })
  serverId: string;

  @Metadata({ data: "json, name=SshPublicKeyId" })
  sshPublicKeyId: string;

  @Metadata({ data: "json, name=UserName" })
  userName: string;
}
