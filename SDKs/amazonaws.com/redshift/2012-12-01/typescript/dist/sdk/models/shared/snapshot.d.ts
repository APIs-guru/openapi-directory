import { SpeakeasyBase } from "../../../internal/utils";
import { AccountWithRestoreAccess } from "./accountwithrestoreaccess";
import { Tag } from "./tag";
/**
 * Describes a snapshot.
**/
export declare class Snapshot extends SpeakeasyBase {
    accountsWithRestoreAccess?: AccountWithRestoreAccess[];
    actualIncrementalBackupSizeInMegaBytes?: number;
    availabilityZone?: string;
    backupProgressInMegaBytes?: number;
    clusterCreateTime?: Date;
    clusterIdentifier?: string;
    clusterVersion?: string;
    currentBackupRateInMegaBytesPerSecond?: number;
    dbName?: string;
    elapsedTimeInSeconds?: number;
    encrypted?: boolean;
    encryptedWithHsm?: boolean;
    engineFullVersion?: string;
    enhancedVpcRouting?: boolean;
    estimatedSecondsToCompletion?: number;
    kmsKeyId?: string;
    maintenanceTrackName?: string;
    manualSnapshotRemainingDays?: number;
    manualSnapshotRetentionPeriod?: number;
    masterUsername?: string;
    nodeType?: string;
    numberOfNodes?: number;
    ownerAccount?: string;
    port?: number;
    restorableNodeTypes?: string[];
    snapshotCreateTime?: Date;
    snapshotIdentifier?: string;
    snapshotRetentionStartTime?: Date;
    snapshotType?: string;
    sourceRegion?: string;
    status?: string;
    tags?: Tag[];
    totalBackupSizeInMegaBytes?: number;
    vpcId?: string;
}
