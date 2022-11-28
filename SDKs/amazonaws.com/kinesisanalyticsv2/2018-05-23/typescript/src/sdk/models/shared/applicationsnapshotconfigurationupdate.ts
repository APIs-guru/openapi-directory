import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApplicationSnapshotConfigurationUpdate
/** 
 * Describes updates to whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.
**/
export class ApplicationSnapshotConfigurationUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SnapshotsEnabledUpdate" })
  snapshotsEnabledUpdate: boolean;
}
