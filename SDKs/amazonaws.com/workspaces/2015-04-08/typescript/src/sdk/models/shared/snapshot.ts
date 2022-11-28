import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Snapshot
/** 
 * Describes a snapshot.
**/
export class Snapshot extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SnapshotTime" })
  snapshotTime?: Date;
}
