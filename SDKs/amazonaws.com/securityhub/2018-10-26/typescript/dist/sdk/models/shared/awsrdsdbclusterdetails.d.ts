import { SpeakeasyBase } from "../../../internal/utils";
import { AwsRdsDbClusterAssociatedRole } from "./awsrdsdbclusterassociatedrole";
import { AwsRdsDbClusterMember } from "./awsrdsdbclustermember";
import { AwsRdsDbClusterOptionGroupMembership } from "./awsrdsdbclusteroptiongroupmembership";
import { AwsRdsDbDomainMembership } from "./awsrdsdbdomainmembership";
import { AwsRdsDbInstanceVpcSecurityGroup } from "./awsrdsdbinstancevpcsecuritygroup";
/**
 * Information about an Amazon RDS DB cluster.
**/
export declare class AwsRdsDbClusterDetails extends SpeakeasyBase {
    activityStreamStatus?: string;
    allocatedStorage?: number;
    associatedRoles?: AwsRdsDbClusterAssociatedRole[];
    availabilityZones?: string[];
    backupRetentionPeriod?: number;
    clusterCreateTime?: string;
    copyTagsToSnapshot?: boolean;
    crossAccountClone?: boolean;
    customEndpoints?: string[];
    databaseName?: string;
    dbClusterIdentifier?: string;
    dbClusterMembers?: AwsRdsDbClusterMember[];
    dbClusterOptionGroupMemberships?: AwsRdsDbClusterOptionGroupMembership[];
    dbClusterParameterGroup?: string;
    dbClusterResourceId?: string;
    dbSubnetGroup?: string;
    deletionProtection?: boolean;
    domainMemberships?: AwsRdsDbDomainMembership[];
    enabledCloudWatchLogsExports?: string[];
    endpoint?: string;
    engine?: string;
    engineMode?: string;
    engineVersion?: string;
    hostedZoneId?: string;
    httpEndpointEnabled?: boolean;
    iamDatabaseAuthenticationEnabled?: boolean;
    kmsKeyId?: string;
    masterUsername?: string;
    multiAz?: boolean;
    port?: number;
    preferredBackupWindow?: string;
    preferredMaintenanceWindow?: string;
    readReplicaIdentifiers?: string[];
    readerEndpoint?: string;
    status?: string;
    storageEncrypted?: boolean;
    vpcSecurityGroups?: AwsRdsDbInstanceVpcSecurityGroup[];
}
