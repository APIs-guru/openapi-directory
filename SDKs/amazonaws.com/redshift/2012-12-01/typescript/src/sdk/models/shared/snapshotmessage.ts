import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Snapshot } from "./snapshot";



// SnapshotMessage
/** 
 * Contains the output from the <a>DescribeClusterSnapshots</a> action. 
**/
export class SnapshotMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: Snapshot })
  snapshots?: Snapshot[];
}
