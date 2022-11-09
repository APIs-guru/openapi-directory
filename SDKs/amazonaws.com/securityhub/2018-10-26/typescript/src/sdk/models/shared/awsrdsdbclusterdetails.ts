import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsRdsDbClusterAssociatedRole } from "./awsrdsdbclusterassociatedrole";
import { AwsRdsDbClusterMember } from "./awsrdsdbclustermember";
import { AwsRdsDbClusterOptionGroupMembership } from "./awsrdsdbclusteroptiongroupmembership";
import { AwsRdsDbDomainMembership } from "./awsrdsdbdomainmembership";
import { AwsRdsDbInstanceVpcSecurityGroup } from "./awsrdsdbinstancevpcsecuritygroup";


// AwsRdsDbClusterDetails
/** 
 * Information about an Amazon RDS DB cluster.
**/
export class AwsRdsDbClusterDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActivityStreamStatus" })
  activityStreamStatus?: string;

  @Metadata({ data: "json, name=AllocatedStorage" })
  allocatedStorage?: number;

  @Metadata({ data: "json, name=AssociatedRoles", elemType: shared.AwsRdsDbClusterAssociatedRole })
  associatedRoles?: AwsRdsDbClusterAssociatedRole[];

  @Metadata({ data: "json, name=AvailabilityZones" })
  availabilityZones?: string[];

  @Metadata({ data: "json, name=BackupRetentionPeriod" })
  backupRetentionPeriod?: number;

  @Metadata({ data: "json, name=ClusterCreateTime" })
  clusterCreateTime?: string;

  @Metadata({ data: "json, name=CopyTagsToSnapshot" })
  copyTagsToSnapshot?: boolean;

  @Metadata({ data: "json, name=CrossAccountClone" })
  crossAccountClone?: boolean;

  @Metadata({ data: "json, name=CustomEndpoints" })
  customEndpoints?: string[];

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName?: string;

  @Metadata({ data: "json, name=DbClusterIdentifier" })
  dbClusterIdentifier?: string;

  @Metadata({ data: "json, name=DbClusterMembers", elemType: shared.AwsRdsDbClusterMember })
  dbClusterMembers?: AwsRdsDbClusterMember[];

  @Metadata({ data: "json, name=DbClusterOptionGroupMemberships", elemType: shared.AwsRdsDbClusterOptionGroupMembership })
  dbClusterOptionGroupMemberships?: AwsRdsDbClusterOptionGroupMembership[];

  @Metadata({ data: "json, name=DbClusterParameterGroup" })
  dbClusterParameterGroup?: string;

  @Metadata({ data: "json, name=DbClusterResourceId" })
  dbClusterResourceId?: string;

  @Metadata({ data: "json, name=DbSubnetGroup" })
  dbSubnetGroup?: string;

  @Metadata({ data: "json, name=DeletionProtection" })
  deletionProtection?: boolean;

  @Metadata({ data: "json, name=DomainMemberships", elemType: shared.AwsRdsDbDomainMembership })
  domainMemberships?: AwsRdsDbDomainMembership[];

  @Metadata({ data: "json, name=EnabledCloudWatchLogsExports" })
  enabledCloudWatchLogsExports?: string[];

  @Metadata({ data: "json, name=Endpoint" })
  endpoint?: string;

  @Metadata({ data: "json, name=Engine" })
  engine?: string;

  @Metadata({ data: "json, name=EngineMode" })
  engineMode?: string;

  @Metadata({ data: "json, name=EngineVersion" })
  engineVersion?: string;

  @Metadata({ data: "json, name=HostedZoneId" })
  hostedZoneId?: string;

  @Metadata({ data: "json, name=HttpEndpointEnabled" })
  httpEndpointEnabled?: boolean;

  @Metadata({ data: "json, name=IamDatabaseAuthenticationEnabled" })
  iamDatabaseAuthenticationEnabled?: boolean;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=MasterUsername" })
  masterUsername?: string;

  @Metadata({ data: "json, name=MultiAz" })
  multiAz?: boolean;

  @Metadata({ data: "json, name=Port" })
  port?: number;

  @Metadata({ data: "json, name=PreferredBackupWindow" })
  preferredBackupWindow?: string;

  @Metadata({ data: "json, name=PreferredMaintenanceWindow" })
  preferredMaintenanceWindow?: string;

  @Metadata({ data: "json, name=ReadReplicaIdentifiers" })
  readReplicaIdentifiers?: string[];

  @Metadata({ data: "json, name=ReaderEndpoint" })
  readerEndpoint?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;

  @Metadata({ data: "json, name=StorageEncrypted" })
  storageEncrypted?: boolean;

  @Metadata({ data: "json, name=VpcSecurityGroups", elemType: shared.AwsRdsDbInstanceVpcSecurityGroup })
  vpcSecurityGroups?: AwsRdsDbInstanceVpcSecurityGroup[];
}
