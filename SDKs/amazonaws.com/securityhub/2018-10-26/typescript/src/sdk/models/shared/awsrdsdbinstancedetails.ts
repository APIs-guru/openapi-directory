import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsRdsDbInstanceAssociatedRole } from "./awsrdsdbinstanceassociatedrole";
import { AwsRdsDbParameterGroup } from "./awsrdsdbparametergroup";
import { AwsRdsDbSubnetGroup } from "./awsrdsdbsubnetgroup";
import { AwsRdsDbDomainMembership } from "./awsrdsdbdomainmembership";
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
  @SpeakeasyMetadata({ data: "json, name=AllocatedStorage" })
  allocatedStorage?: number;

  @SpeakeasyMetadata({ data: "json, name=AssociatedRoles", elemType: AwsRdsDbInstanceAssociatedRole })
  associatedRoles?: AwsRdsDbInstanceAssociatedRole[];

  @SpeakeasyMetadata({ data: "json, name=AutoMinorVersionUpgrade" })
  autoMinorVersionUpgrade?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AvailabilityZone" })
  availabilityZone?: string;

  @SpeakeasyMetadata({ data: "json, name=BackupRetentionPeriod" })
  backupRetentionPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=CACertificateIdentifier" })
  caCertificateIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=CharacterSetName" })
  characterSetName?: string;

  @SpeakeasyMetadata({ data: "json, name=CopyTagsToSnapshot" })
  copyTagsToSnapshot?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DBClusterIdentifier" })
  dbClusterIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=DBInstanceClass" })
  dbInstanceClass?: string;

  @SpeakeasyMetadata({ data: "json, name=DBInstanceIdentifier" })
  dbInstanceIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=DBName" })
  dbName?: string;

  @SpeakeasyMetadata({ data: "json, name=DbInstancePort" })
  dbInstancePort?: number;

  @SpeakeasyMetadata({ data: "json, name=DbInstanceStatus" })
  dbInstanceStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=DbParameterGroups", elemType: AwsRdsDbParameterGroup })
  dbParameterGroups?: AwsRdsDbParameterGroup[];

  @SpeakeasyMetadata({ data: "json, name=DbSecurityGroups" })
  dbSecurityGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=DbSubnetGroup" })
  dbSubnetGroup?: AwsRdsDbSubnetGroup;

  @SpeakeasyMetadata({ data: "json, name=DbiResourceId" })
  dbiResourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=DeletionProtection" })
  deletionProtection?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DomainMemberships", elemType: AwsRdsDbDomainMembership })
  domainMemberships?: AwsRdsDbDomainMembership[];

  @SpeakeasyMetadata({ data: "json, name=EnabledCloudWatchLogsExports" })
  enabledCloudWatchLogsExports?: string[];

  @SpeakeasyMetadata({ data: "json, name=Endpoint" })
  endpoint?: AwsRdsDbInstanceEndpoint;

  @SpeakeasyMetadata({ data: "json, name=Engine" })
  engine?: string;

  @SpeakeasyMetadata({ data: "json, name=EngineVersion" })
  engineVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=EnhancedMonitoringResourceArn" })
  enhancedMonitoringResourceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=IAMDatabaseAuthenticationEnabled" })
  iamDatabaseAuthenticationEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=InstanceCreateTime" })
  instanceCreateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=Iops" })
  iops?: number;

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=LatestRestorableTime" })
  latestRestorableTime?: string;

  @SpeakeasyMetadata({ data: "json, name=LicenseModel" })
  licenseModel?: string;

  @SpeakeasyMetadata({ data: "json, name=ListenerEndpoint" })
  listenerEndpoint?: AwsRdsDbInstanceEndpoint;

  @SpeakeasyMetadata({ data: "json, name=MasterUsername" })
  masterUsername?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxAllocatedStorage" })
  maxAllocatedStorage?: number;

  @SpeakeasyMetadata({ data: "json, name=MonitoringInterval" })
  monitoringInterval?: number;

  @SpeakeasyMetadata({ data: "json, name=MonitoringRoleArn" })
  monitoringRoleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=MultiAz" })
  multiAz?: boolean;

  @SpeakeasyMetadata({ data: "json, name=OptionGroupMemberships", elemType: AwsRdsDbOptionGroupMembership })
  optionGroupMemberships?: AwsRdsDbOptionGroupMembership[];

  @SpeakeasyMetadata({ data: "json, name=PendingModifiedValues" })
  pendingModifiedValues?: AwsRdsDbPendingModifiedValues;

  @SpeakeasyMetadata({ data: "json, name=PerformanceInsightsEnabled" })
  performanceInsightsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PerformanceInsightsKmsKeyId" })
  performanceInsightsKmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=PerformanceInsightsRetentionPeriod" })
  performanceInsightsRetentionPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=PreferredBackupWindow" })
  preferredBackupWindow?: string;

  @SpeakeasyMetadata({ data: "json, name=PreferredMaintenanceWindow" })
  preferredMaintenanceWindow?: string;

  @SpeakeasyMetadata({ data: "json, name=ProcessorFeatures", elemType: AwsRdsDbProcessorFeature })
  processorFeatures?: AwsRdsDbProcessorFeature[];

  @SpeakeasyMetadata({ data: "json, name=PromotionTier" })
  promotionTier?: number;

  @SpeakeasyMetadata({ data: "json, name=PubliclyAccessible" })
  publiclyAccessible?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ReadReplicaDBClusterIdentifiers" })
  readReplicaDbClusterIdentifiers?: string[];

  @SpeakeasyMetadata({ data: "json, name=ReadReplicaDBInstanceIdentifiers" })
  readReplicaDbInstanceIdentifiers?: string[];

  @SpeakeasyMetadata({ data: "json, name=ReadReplicaSourceDBInstanceIdentifier" })
  readReplicaSourceDbInstanceIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryAvailabilityZone" })
  secondaryAvailabilityZone?: string;

  @SpeakeasyMetadata({ data: "json, name=StatusInfos", elemType: AwsRdsDbStatusInfo })
  statusInfos?: AwsRdsDbStatusInfo[];

  @SpeakeasyMetadata({ data: "json, name=StorageEncrypted" })
  storageEncrypted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=StorageType" })
  storageType?: string;

  @SpeakeasyMetadata({ data: "json, name=TdeCredentialArn" })
  tdeCredentialArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Timezone" })
  timezone?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcSecurityGroups", elemType: AwsRdsDbInstanceVpcSecurityGroup })
  vpcSecurityGroups?: AwsRdsDbInstanceVpcSecurityGroup[];
}
