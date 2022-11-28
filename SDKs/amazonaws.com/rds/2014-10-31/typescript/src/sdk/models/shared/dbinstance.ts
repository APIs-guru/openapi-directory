import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActivityStreamModeEnum } from "./activitystreammodeenum";
import { ActivityStreamStatusEnum } from "./activitystreamstatusenum";
import { DbInstanceRole } from "./dbinstancerole";
import { DbInstanceAutomatedBackupsReplication } from "./dbinstanceautomatedbackupsreplication";
import { DbParameterGroupStatus } from "./dbparametergroupstatus";
import { DbSecurityGroupMembership } from "./dbsecuritygroupmembership";
import { DbSubnetGroup } from "./dbsubnetgroup";
import { DomainMembership } from "./domainmembership";
import { Endpoint } from "./endpoint";
import { OptionGroupMembership } from "./optiongroupmembership";
import { PendingModifiedValues } from "./pendingmodifiedvalues";
import { ProcessorFeature } from "./processorfeature";
import { ReplicaModeEnum } from "./replicamodeenum";
import { DbInstanceStatusInfo } from "./dbinstancestatusinfo";
import { Tag } from "./tag";
import { VpcSecurityGroupMembership } from "./vpcsecuritygroupmembership";



// DbInstance
/** 
 * <p>Contains the details of an Amazon RDS DB instance. </p> <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action. </p>
**/
export class DbInstance extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activityStreamEngineNativeAuditFieldsIncluded?: boolean;

  @SpeakeasyMetadata()
  activityStreamKinesisStreamName?: string;

  @SpeakeasyMetadata()
  activityStreamKmsKeyId?: string;

  @SpeakeasyMetadata()
  activityStreamMode?: ActivityStreamModeEnum;

  @SpeakeasyMetadata()
  activityStreamStatus?: ActivityStreamStatusEnum;

  @SpeakeasyMetadata()
  allocatedStorage?: number;

  @SpeakeasyMetadata({ elemType: DbInstanceRole })
  associatedRoles?: DbInstanceRole[];

  @SpeakeasyMetadata()
  autoMinorVersionUpgrade?: boolean;

  @SpeakeasyMetadata()
  automaticRestartTime?: Date;

  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata()
  awsBackupRecoveryPointArn?: string;

  @SpeakeasyMetadata()
  backupRetentionPeriod?: number;

  @SpeakeasyMetadata()
  caCertificateIdentifier?: string;

  @SpeakeasyMetadata()
  characterSetName?: string;

  @SpeakeasyMetadata()
  copyTagsToSnapshot?: boolean;

  @SpeakeasyMetadata()
  customerOwnedIpEnabled?: boolean;

  @SpeakeasyMetadata()
  dbClusterIdentifier?: string;

  @SpeakeasyMetadata()
  dbInstanceArn?: string;

  @SpeakeasyMetadata({ elemType: DbInstanceAutomatedBackupsReplication })
  dbInstanceAutomatedBackupsReplications?: DbInstanceAutomatedBackupsReplication[];

  @SpeakeasyMetadata()
  dbInstanceClass?: string;

  @SpeakeasyMetadata()
  dbInstanceIdentifier?: string;

  @SpeakeasyMetadata()
  dbInstanceStatus?: string;

  @SpeakeasyMetadata()
  dbName?: string;

  @SpeakeasyMetadata({ elemType: DbParameterGroupStatus })
  dbParameterGroups?: DbParameterGroupStatus[];

  @SpeakeasyMetadata({ elemType: DbSecurityGroupMembership })
  dbSecurityGroups?: DbSecurityGroupMembership[];

  @SpeakeasyMetadata()
  dbSubnetGroup?: DbSubnetGroup;

  @SpeakeasyMetadata()
  dbInstancePort?: number;

  @SpeakeasyMetadata()
  dbiResourceId?: string;

  @SpeakeasyMetadata()
  deletionProtection?: boolean;

  @SpeakeasyMetadata({ elemType: DomainMembership })
  domainMemberships?: DomainMembership[];

  @SpeakeasyMetadata()
  enabledCloudwatchLogsExports?: string[];

  @SpeakeasyMetadata()
  endpoint?: Endpoint;

  @SpeakeasyMetadata()
  engine?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;

  @SpeakeasyMetadata()
  enhancedMonitoringResourceArn?: string;

  @SpeakeasyMetadata()
  iamDatabaseAuthenticationEnabled?: boolean;

  @SpeakeasyMetadata()
  instanceCreateTime?: Date;

  @SpeakeasyMetadata()
  iops?: number;

  @SpeakeasyMetadata()
  kmsKeyId?: string;

  @SpeakeasyMetadata()
  latestRestorableTime?: Date;

  @SpeakeasyMetadata()
  licenseModel?: string;

  @SpeakeasyMetadata()
  listenerEndpoint?: Endpoint;

  @SpeakeasyMetadata()
  masterUsername?: string;

  @SpeakeasyMetadata()
  maxAllocatedStorage?: number;

  @SpeakeasyMetadata()
  monitoringInterval?: number;

  @SpeakeasyMetadata()
  monitoringRoleArn?: string;

  @SpeakeasyMetadata()
  multiAz?: boolean;

  @SpeakeasyMetadata()
  ncharCharacterSetName?: string;

  @SpeakeasyMetadata({ elemType: OptionGroupMembership })
  optionGroupMemberships?: OptionGroupMembership[];

  @SpeakeasyMetadata()
  pendingModifiedValues?: PendingModifiedValues;

  @SpeakeasyMetadata()
  performanceInsightsEnabled?: boolean;

  @SpeakeasyMetadata()
  performanceInsightsKmsKeyId?: string;

  @SpeakeasyMetadata()
  performanceInsightsRetentionPeriod?: number;

  @SpeakeasyMetadata()
  preferredBackupWindow?: string;

  @SpeakeasyMetadata()
  preferredMaintenanceWindow?: string;

  @SpeakeasyMetadata({ elemType: ProcessorFeature })
  processorFeatures?: ProcessorFeature[];

  @SpeakeasyMetadata()
  promotionTier?: number;

  @SpeakeasyMetadata()
  publiclyAccessible?: boolean;

  @SpeakeasyMetadata()
  readReplicaDbClusterIdentifiers?: string[];

  @SpeakeasyMetadata()
  readReplicaDbInstanceIdentifiers?: string[];

  @SpeakeasyMetadata()
  readReplicaSourceDbInstanceIdentifier?: string;

  @SpeakeasyMetadata()
  replicaMode?: ReplicaModeEnum;

  @SpeakeasyMetadata()
  secondaryAvailabilityZone?: string;

  @SpeakeasyMetadata({ elemType: DbInstanceStatusInfo })
  statusInfos?: DbInstanceStatusInfo[];

  @SpeakeasyMetadata()
  storageEncrypted?: boolean;

  @SpeakeasyMetadata()
  storageType?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tagList?: Tag[];

  @SpeakeasyMetadata()
  tdeCredentialArn?: string;

  @SpeakeasyMetadata()
  timezone?: string;

  @SpeakeasyMetadata({ elemType: VpcSecurityGroupMembership })
  vpcSecurityGroups?: VpcSecurityGroupMembership[];
}
