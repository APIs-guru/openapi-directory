import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * <p>Contains the details for an Amazon RDS DB cluster snapshot </p> <p>This data type is used as a response element in the <code>DescribeDBClusterSnapshots</code> action. </p>
**/
export declare class DbClusterSnapshot extends SpeakeasyBase {
    allocatedStorage?: number;
    availabilityZones?: string[];
    clusterCreateTime?: Date;
    dbClusterIdentifier?: string;
    dbClusterSnapshotArn?: string;
    dbClusterSnapshotIdentifier?: string;
    engine?: string;
    engineMode?: string;
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
    tagList?: Tag[];
    vpcId?: string;
}
