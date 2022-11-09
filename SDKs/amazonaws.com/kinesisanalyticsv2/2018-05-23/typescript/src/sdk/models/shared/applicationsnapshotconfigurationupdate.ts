import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApplicationSnapshotConfigurationUpdate
/** 
 * Describes updates to whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.
**/
export class ApplicationSnapshotConfigurationUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=SnapshotsEnabledUpdate" })
  snapshotsEnabledUpdate: boolean;
}
