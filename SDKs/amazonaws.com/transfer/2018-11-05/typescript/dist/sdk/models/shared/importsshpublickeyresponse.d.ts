import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Identifies the user, the server they belong to, and the identifier of the SSH public key associated with that user. A user can have more than one key on each server that they are associated with.
**/
export declare class ImportSshPublicKeyResponse extends SpeakeasyBase {
    serverId: string;
    sshPublicKeyId: string;
    userName: string;
}
