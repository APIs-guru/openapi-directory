import { SpeakeasyBase } from "../../../internal/utils";
import { DbClusterRole } from "./dbclusterrole";
import { DbClusterMember } from "./dbclustermember";
import { DbClusterOptionGroupStatus } from "./dbclusteroptiongroupstatus";
import { VpcSecurityGroupMembership } from "./vpcsecuritygroupmembership";
/**
 * <p>Contains the details of an Amazon Neptune DB cluster.</p> <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>
**/
export declare class DbCluster extends SpeakeasyBase {
    allocatedStorage?: number;
    associatedRoles?: DbClusterRole[];
    automaticRestartTime?: Date;
    availabilityZones?: string[];
    backupRetentionPeriod?: number;
    characterSetName?: string;
    cloneGroupId?: string;
    clusterCreateTime?: Date;
    copyTagsToSnapshot?: boolean;
    crossAccountClone?: boolean;
    dbClusterArn?: string;
    dbClusterIdentifier?: string;
    dbClusterMembers?: DbClusterMember[];
    dbClusterOptionGroupMemberships?: DbClusterOptionGroupStatus[];
    dbClusterParameterGroup?: string;
    dbSubnetGroup?: string;
    databaseName?: string;
    dbClusterResourceId?: string;
    deletionProtection?: boolean;
    earliestRestorableTime?: Date;
    enabledCloudwatchLogsExports?: string[];
    endpoint?: string;
    engine?: string;
    engineVersion?: string;
    hostedZoneId?: string;
    iamDatabaseAuthenticationEnabled?: boolean;
    kmsKeyId?: string;
    latestRestorableTime?: Date;
    masterUsername?: string;
    multiAz?: boolean;
    percentProgress?: string;
    port?: number;
    preferredBackupWindow?: string;
    preferredMaintenanceWindow?: string;
    readReplicaIdentifiers?: string[];
    readerEndpoint?: string;
    replicationSourceIdentifier?: string;
    status?: string;
    storageEncrypted?: boolean;
    vpcSecurityGroups?: VpcSecurityGroupMembership[];
}
