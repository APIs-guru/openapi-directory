import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SnapshotCopyGrant } from "./snapshotcopygrant";



// SnapshotCopyGrantMessage
/** 
 * <p/>
**/
export class SnapshotCopyGrantMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: SnapshotCopyGrant })
  snapshotCopyGrants?: SnapshotCopyGrant[];
}
