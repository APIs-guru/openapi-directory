import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsRedshiftClusterClusterSnapshotCopyStatus
/** 
 * Information about a cross-Region snapshot copy.
**/
export class AwsRedshiftClusterClusterSnapshotCopyStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=DestinationRegion" })
  destinationRegion?: string;

  @Metadata({ data: "json, name=ManualSnapshotRetentionPeriod" })
  manualSnapshotRetentionPeriod?: number;

  @Metadata({ data: "json, name=RetentionPeriod" })
  retentionPeriod?: number;

  @Metadata({ data: "json, name=SnapshotCopyGrantName" })
  snapshotCopyGrantName?: string;
}
