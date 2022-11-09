import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsRdsDbInstanceAssociatedRole } from "./awsrdsdbinstanceassociatedrole";
import { AwsRdsDbParameterGroup } from "./awsrdsdbparametergroup";
import { AwsRdsDbSubnetGroup } from "./awsrdsdbsubnetgroup";
import { AwsRdsDbDomainMembership } from "./awsrdsdbdomainmembership";
import { AwsRdsDbInstanceEndpoint } from "./awsrdsdbinstanceendpoint";
import { AwsRdsDbInstanceEndpoint } from "./awsrdsdbinstanceendpoint";
import { AwsRdsDbOptionGroupMembership } from "./awsrdsdboptiongroupmembership";
import { AwsRdsDbPendingModifiedValues } from "./awsrdsdbpendingmodifiedvalues";
import { AwsRdsDbProcessorFeature } from "./awsrdsdbprocessorfeature";
import { AwsRdsDbStatusInfo } from "./awsrdsdbstatusinfo";
import { AwsRdsDbInstanceVpcSecurityGroup } from "./awsrdsdbinstancevpcsecuritygroup";


// AwsRdsDbInstanceDetails
/** 
 * Contains the details of an Amazon RDS DB instance.
**/
export class AwsRdsDbInstanceDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllocatedStorage" })
  allocatedStorage?: number;

  @Metadata({ data: "json, name=AssociatedRoles", elemType: shared.AwsRdsDbInstanceAssociatedRole })
  associatedRoles?: AwsRdsDbInstanceAssociatedRole[];

  @Metadata({ data: "json, name=AutoMinorVersionUpgrade" })
  autoMinorVersionUpgrade?: boolean;

  @Metadata({ data: "json, name=AvailabilityZone" })
  availabilityZone?: string;

  @Metadata({ data: "json, name=BackupRetentionPeriod" })
  backupRetentionPeriod?: number;

  @Metadata({ data: "json, name=CACertificateIdentifier" })
  caCertificateIdentifier?: string;

  @Metadata({ data: "json, name=CharacterSetName" })
  characterSetName?: string;

  @Metadata({ data: "json, name=CopyTagsToSnapshot" })
  copyTagsToSnapshot?: boolean;

  @Metadata({ data: "json, name=DBClusterIdentifier" })
  dbClusterIdentifier?: string;

  @Metadata({ data: "json, name=DBInstanceClass" })
  dbInstanceClass?: string;

  @Metadata({ data: "json, name=DBInstanceIdentifier" })
  dbInstanceIdentifier?: string;

  @Metadata({ data: "json, name=DBName" })
  dbName?: string;

  @Metadata({ data: "json, name=DbInstancePort" })
  dbInstancePort?: number;

  @Metadata({ data: "json, name=DbInstanceStatus" })
  dbInstanceStatus?: string;

  @Metadata({ data: "json, name=DbParameterGroups", elemType: shared.AwsRdsDbParameterGroup })
  dbParameterGroups?: AwsRdsDbParameterGroup[];

  @Metadata({ data: "json, name=DbSecurityGroups" })
  dbSecurityGroups?: string[];

  @Metadata({ data: "json, name=DbSubnetGroup" })
  dbSubnetGroup?: AwsRdsDbSubnetGroup;

  @Metadata({ data: "json, name=DbiResourceId" })
  dbiResourceId?: string;

  @Metadata({ data: "json, name=DeletionProtection" })
  deletionProtection?: boolean;

  @Metadata({ data: "json, name=DomainMemberships", elemType: shared.AwsRdsDbDomainMembership })
  domainMemberships?: AwsRdsDbDomainMembership[];

  @Metadata({ data: "json, name=EnabledCloudWatchLogsExports" })
  enabledCloudWatchLogsExports?: string[];

  @Metadata({ data: "json, name=Endpoint" })
  endpoint?: AwsRdsDbInstanceEndpoint;

  @Metadata({ data: "json, name=Engine" })
  engine?: string;

  @Metadata({ data: "json, name=EngineVersion" })
  engineVersion?: string;

  @Metadata({ data: "json, name=EnhancedMonitoringResourceArn" })
  enhancedMonitoringResourceArn?: string;

  @Metadata({ data: "json, name=IAMDatabaseAuthenticationEnabled" })
  iamDatabaseAuthenticationEnabled?: boolean;

  @Metadata({ data: "json, name=InstanceCreateTime" })
  instanceCreateTime?: string;

  @Metadata({ data: "json, name=Iops" })
  iops?: number;

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=LatestRestorableTime" })
  latestRestorableTime?: string;

  @Metadata({ data: "json, name=LicenseModel" })
  licenseModel?: string;

  @Metadata({ data: "json, name=ListenerEndpoint" })
  listenerEndpoint?: AwsRdsDbInstanceEndpoint;

  @Metadata({ data: "json, name=MasterUsername" })
  masterUsername?: string;

  @Metadata({ data: "json, name=MaxAllocatedStorage" })
  maxAllocatedStorage?: number;

  @Metadata({ data: "json, name=MonitoringInterval" })
  monitoringInterval?: number;

  @Metadata({ data: "json, name=MonitoringRoleArn" })
  monitoringRoleArn?: string;

  @Metadata({ data: "json, name=MultiAz" })
  multiAz?: boolean;

  @Metadata({ data: "json, name=OptionGroupMemberships", elemType: shared.AwsRdsDbOptionGroupMembership })
  optionGroupMemberships?: AwsRdsDbOptionGroupMembership[];

  @Metadata({ data: "json, name=PendingModifiedValues" })
  pendingModifiedValues?: AwsRdsDbPendingModifiedValues;

  @Metadata({ data: "json, name=PerformanceInsightsEnabled" })
  performanceInsightsEnabled?: boolean;

  @Metadata({ data: "json, name=PerformanceInsightsKmsKeyId" })
  performanceInsightsKmsKeyId?: string;

  @Metadata({ data: "json, name=PerformanceInsightsRetentionPeriod" })
  performanceInsightsRetentionPeriod?: number;

  @Metadata({ data: "json, name=PreferredBackupWindow" })
  preferredBackupWindow?: string;

  @Metadata({ data: "json, name=PreferredMaintenanceWindow" })
  preferredMaintenanceWindow?: string;

  @Metadata({ data: "json, name=ProcessorFeatures", elemType: shared.AwsRdsDbProcessorFeature })
  processorFeatures?: AwsRdsDbProcessorFeature[];

  @Metadata({ data: "json, name=PromotionTier" })
  promotionTier?: number;

  @Metadata({ data: "json, name=PubliclyAccessible" })
  publiclyAccessible?: boolean;

  @Metadata({ data: "json, name=ReadReplicaDBClusterIdentifiers" })
  readReplicaDbClusterIdentifiers?: string[];

  @Metadata({ data: "json, name=ReadReplicaDBInstanceIdentifiers" })
  readReplicaDbInstanceIdentifiers?: string[];

  @Metadata({ data: "json, name=ReadReplicaSourceDBInstanceIdentifier" })
  readReplicaSourceDbInstanceIdentifier?: string;

  @Metadata({ data: "json, name=SecondaryAvailabilityZone" })
  secondaryAvailabilityZone?: string;

  @Metadata({ data: "json, name=StatusInfos", elemType: shared.AwsRdsDbStatusInfo })
  statusInfos?: AwsRdsDbStatusInfo[];

  @Metadata({ data: "json, name=StorageEncrypted" })
  storageEncrypted?: boolean;

  @Metadata({ data: "json, name=StorageType" })
  storageType?: string;

  @Metadata({ data: "json, name=TdeCredentialArn" })
  tdeCredentialArn?: string;

  @Metadata({ data: "json, name=Timezone" })
  timezone?: string;

  @Metadata({ data: "json, name=VpcSecurityGroups", elemType: shared.AwsRdsDbInstanceVpcSecurityGroup })
  vpcSecurityGroups?: AwsRdsDbInstanceVpcSecurityGroup[];
}
