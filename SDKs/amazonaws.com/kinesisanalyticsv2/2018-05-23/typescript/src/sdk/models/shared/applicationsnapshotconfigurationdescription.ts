import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApplicationSnapshotConfigurationDescription
/** 
 * Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.
**/
export class ApplicationSnapshotConfigurationDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SnapshotsEnabled" })
  snapshotsEnabled: boolean;
}
