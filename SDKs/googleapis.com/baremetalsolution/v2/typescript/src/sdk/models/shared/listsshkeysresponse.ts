import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SshKey } from "./sshkey";


// ListSshKeysResponse
/** 
 * Message for response of ListSSHKeys.
**/
export class ListSshKeysResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=sshKeys", elemType: shared.SshKey })
  sshKeys?: SshKey[];
}
