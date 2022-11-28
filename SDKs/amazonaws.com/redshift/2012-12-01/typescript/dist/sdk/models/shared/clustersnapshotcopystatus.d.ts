import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Returns the destination region and retention period that are configured for cross-region snapshot copy.
**/
export declare class ClusterSnapshotCopyStatus extends SpeakeasyBase {
    destinationRegion?: string;
    manualSnapshotRetentionPeriod?: number;
    retentionPeriod?: number;
    snapshotCopyGrantName?: string;
}
