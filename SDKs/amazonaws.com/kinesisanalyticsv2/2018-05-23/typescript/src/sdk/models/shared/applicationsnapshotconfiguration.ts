import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApplicationSnapshotConfiguration
/** 
 * Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.
**/
export class ApplicationSnapshotConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SnapshotsEnabled" })
  snapshotsEnabled: boolean;
}
