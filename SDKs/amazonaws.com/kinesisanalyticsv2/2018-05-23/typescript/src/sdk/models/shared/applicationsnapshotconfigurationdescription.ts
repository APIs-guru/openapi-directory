import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApplicationSnapshotConfigurationDescription
/** 
 * Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.
**/
export class ApplicationSnapshotConfigurationDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=SnapshotsEnabled" })
  snapshotsEnabled: boolean;
}
