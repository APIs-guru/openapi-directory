import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClusterSnapshotCopyStatus
/** 
 * Returns the destination region and retention period that are configured for cross-region snapshot copy.
**/
export class ClusterSnapshotCopyStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  destinationRegion?: string;

  @SpeakeasyMetadata()
  manualSnapshotRetentionPeriod?: number;

  @SpeakeasyMetadata()
  retentionPeriod?: number;

  @SpeakeasyMetadata()
  snapshotCopyGrantName?: string;
}
