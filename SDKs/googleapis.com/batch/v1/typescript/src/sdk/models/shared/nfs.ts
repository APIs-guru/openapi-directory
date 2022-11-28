import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Nfs
/** 
 * Represents an NFS volume.
**/
export class Nfs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=remotePath" })
  remotePath?: string;

  @SpeakeasyMetadata({ data: "json, name=server" })
  server?: string;
}
