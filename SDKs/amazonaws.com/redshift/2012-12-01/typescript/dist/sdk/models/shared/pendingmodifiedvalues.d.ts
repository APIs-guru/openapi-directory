import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes cluster attributes that are in a pending state. A change to one or more the attributes was requested and is in progress or will be applied.
**/
export declare class PendingModifiedValues extends SpeakeasyBase {
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
