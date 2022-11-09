import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApplicationSnapshotConfiguration
/** 
 * Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.
**/
export class ApplicationSnapshotConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=SnapshotsEnabled" })
  snapshotsEnabled: boolean;
}
