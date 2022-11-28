import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsRedshiftClusterClusterSnapshotCopyStatus
/** 
 * Information about a cross-Region snapshot copy.
**/
export class AwsRedshiftClusterClusterSnapshotCopyStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DestinationRegion" })
  destinationRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=ManualSnapshotRetentionPeriod" })
  manualSnapshotRetentionPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=RetentionPeriod" })
  retentionPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=SnapshotCopyGrantName" })
  snapshotCopyGrantName?: string;
}
