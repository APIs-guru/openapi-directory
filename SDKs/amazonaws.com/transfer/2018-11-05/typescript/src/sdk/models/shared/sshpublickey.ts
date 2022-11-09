import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SshPublicKey
/** 
 * Provides information about the public Secure Shell (SSH) key that is associated with a user account for the specific file transfer protocol-enabled server (as identified by <code>ServerId</code>). The information returned includes the date the key was imported, the public key contents, and the public key ID. A user can store more than one SSH public key associated with their user name on a specific server.
**/
export class SshPublicKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=DateImported" })
  dateImported: Date;

  @Metadata({ data: "json, name=SshPublicKeyBody" })
  sshPublicKeyBody: string;

  @Metadata({ data: "json, name=SshPublicKeyId" })
  sshPublicKeyId: string;
}
