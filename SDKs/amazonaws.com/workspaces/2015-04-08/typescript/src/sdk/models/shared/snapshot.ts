import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Snapshot
/** 
 * Describes a snapshot.
**/
export class Snapshot extends SpeakeasyBase {
  @Metadata({ data: "json, name=SnapshotTime" })
  snapshotTime?: Date;
}
