import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Changes to the Amazon Redshift cluster that are currently pending.
**/
export declare class AwsRedshiftClusterPendingModifiedValues extends SpeakeasyBase {
    automatedSnapshotRetentionPeriod?: number;
    clusterIdentifier?: string;
    clusterType?: string;
    clusterVersion?: string;
    encryptionType?: string;
    enhancedVpcRouting?: boolean;
    maintenanceTrackName?: string;
    masterUserPassword?: string;
    nodeType?: string;
    numberOfNodes?: number;
    publiclyAccessible?: boolean;
}
