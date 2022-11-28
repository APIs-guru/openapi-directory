import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SshKey } from "./sshkey";



// ListSshKeysResponse
/** 
 * Message for response of ListSSHKeys.
**/
export class ListSshKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sshKeys", elemType: SshKey })
  sshKeys?: SshKey[];
}
