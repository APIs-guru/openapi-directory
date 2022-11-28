import { SpeakeasyBase } from "../../../internal/utils";
import { SshKey } from "./sshkey";
/**
 * Message for response of ListSSHKeys.
**/
export declare class ListSshKeysResponse extends SpeakeasyBase {
    nextPageToken?: string;
    sshKeys?: SshKey[];
}
