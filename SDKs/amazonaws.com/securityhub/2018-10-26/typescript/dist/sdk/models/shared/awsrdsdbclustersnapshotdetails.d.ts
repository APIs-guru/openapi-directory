import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about an Amazon RDS DB cluster snapshot.
**/
export declare class AwsRdsDbClusterSnapshotDetails extends SpeakeasyBase {
    allocatedStorage?: number;
    availabilityZones?: string[];
    clusterCreateTime?: string;
    dbClusterIdentifier?: string;
    dbClusterSnapshotIdentifier?: string;
    engine?: string;
    engineVersion?: string;
    iamDatabaseAuthenticationEnabled?: boolean;
    kmsKeyId?: string;
    licenseModel?: string;
    masterUsername?: string;
    percentProgress?: number;
    port?: number;
    snapshotCreateTime?: string;
    snapshotType?: string;
    status?: string;
    storageEncrypted?: boolean;
    vpcId?: string;
}
