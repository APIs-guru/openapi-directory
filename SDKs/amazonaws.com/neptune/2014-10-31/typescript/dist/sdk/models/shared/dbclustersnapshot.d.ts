import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Contains the details for an Amazon Neptune DB cluster snapshot</p> <p>This data type is used as a response element in the <a>DescribeDBClusterSnapshots</a> action.</p>
**/
export declare class DbClusterSnapshot extends SpeakeasyBase {
    allocatedStorage?: number;
    availabilityZones?: string[];
    clusterCreateTime?: Date;
    dbClusterIdentifier?: string;
    dbClusterSnapshotArn?: string;
    dbClusterSnapshotIdentifier?: string;
    engine?: string;
    engineVersion?: string;
    iamDatabaseAuthenticationEnabled?: boolean;
    kmsKeyId?: string;
    licenseModel?: string;
    masterUsername?: string;
    percentProgress?: number;
    port?: number;
    snapshotCreateTime?: Date;
    snapshotType?: string;
    sourceDbClusterSnapshotArn?: string;
    status?: string;
    storageEncrypted?: boolean;
    vpcId?: string;
}
