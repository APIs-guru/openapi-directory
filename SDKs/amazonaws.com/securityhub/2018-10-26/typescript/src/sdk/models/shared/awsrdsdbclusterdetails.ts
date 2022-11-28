import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=ActivityStreamStatus" })
  activityStreamStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=AllocatedStorage" })
  allocatedStorage?: number;

  @SpeakeasyMetadata({ data: "json, name=AssociatedRoles", elemType: AwsRdsDbClusterAssociatedRole })
  associatedRoles?: AwsRdsDbClusterAssociatedRole[];

  @SpeakeasyMetadata({ data: "json, name=AvailabilityZones" })
  availabilityZones?: string[];

  @SpeakeasyMetadata({ data: "json, name=BackupRetentionPeriod" })
  backupRetentionPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=ClusterCreateTime" })
  clusterCreateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=CopyTagsToSnapshot" })
  copyTagsToSnapshot?: boolean;

  @SpeakeasyMetadata({ data: "json, name=CrossAccountClone" })
  crossAccountClone?: boolean;

  @SpeakeasyMetadata({ data: "json, name=CustomEndpoints" })
  customEndpoints?: string[];

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName?: string;

  @SpeakeasyMetadata({ data: "json, name=DbClusterIdentifier" })
  dbClusterIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=DbClusterMembers", elemType: AwsRdsDbClusterMember })
  dbClusterMembers?: AwsRdsDbClusterMember[];

  @SpeakeasyMetadata({ data: "json, name=DbClusterOptionGroupMemberships", elemType: AwsRdsDbClusterOptionGroupMembership })
  dbClusterOptionGroupMemberships?: AwsRdsDbClusterOptionGroupMembership[];

  @SpeakeasyMetadata({ data: "json, name=DbClusterParameterGroup" })
  dbClusterParameterGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=DbClusterResourceId" })
  dbClusterResourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=DbSubnetGroup" })
  dbSubnetGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=DeletionProtection" })
  deletionProtection?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DomainMemberships", elemType: AwsRdsDbDomainMembership })
  domainMemberships?: AwsRdsDbDomainMembership[];

  @SpeakeasyMetadata({ data: "json, name=EnabledCloudWatchLogsExports" })
  enabledCloudWatchLogsExports?: string[];

  @SpeakeasyMetadata({ data: "json, name=Endpoint" })
  endpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=Engine" })
  engine?: string;

  @SpeakeasyMetadata({ data: "json, name=EngineMode" })
  engineMode?: string;

  @SpeakeasyMetadata({ data: "json, name=EngineVersion" })
  engineVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=HostedZoneId" })
  hostedZoneId?: string;

  @SpeakeasyMetadata({ data: "json, name=HttpEndpointEnabled" })
  httpEndpointEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IamDatabaseAuthenticationEnabled" })
  iamDatabaseAuthenticationEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=MasterUsername" })
  masterUsername?: string;

  @SpeakeasyMetadata({ data: "json, name=MultiAz" })
  multiAz?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=PreferredBackupWindow" })
  preferredBackupWindow?: string;

  @SpeakeasyMetadata({ data: "json, name=PreferredMaintenanceWindow" })
  preferredMaintenanceWindow?: string;

  @SpeakeasyMetadata({ data: "json, name=ReadReplicaIdentifiers" })
  readReplicaIdentifiers?: string[];

  @SpeakeasyMetadata({ data: "json, name=ReaderEndpoint" })
  readerEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=StorageEncrypted" })
  storageEncrypted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=VpcSecurityGroups", elemType: AwsRdsDbInstanceVpcSecurityGroup })
  vpcSecurityGroups?: AwsRdsDbInstanceVpcSecurityGroup[];
}
