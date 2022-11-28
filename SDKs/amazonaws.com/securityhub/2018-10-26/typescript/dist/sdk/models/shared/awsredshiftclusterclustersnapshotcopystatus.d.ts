import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about a cross-Region snapshot copy.
**/
export declare class AwsRedshiftClusterClusterSnapshotCopyStatus extends SpeakeasyBase {
    destinationRegion?: string;
    manualSnapshotRetentionPeriod?: number;
    retentionPeriod?: number;
    snapshotCopyGrantName?: string;
}
