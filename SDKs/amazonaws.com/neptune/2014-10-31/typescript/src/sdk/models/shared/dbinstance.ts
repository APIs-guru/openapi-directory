import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbParameterGroupStatus } from "./dbparametergroupstatus";
import { DbSecurityGroupMembership } from "./dbsecuritygroupmembership";
import { DbSubnetGroup } from "./dbsubnetgroup";
import { DomainMembership } from "./domainmembership";
import { Endpoint } from "./endpoint";
import { OptionGroupMembership } from "./optiongroupmembership";
import { PendingModifiedValues } from "./pendingmodifiedvalues";
import { DbInstanceStatusInfo } from "./dbinstancestatusinfo";
import { VpcSecurityGroupMembership } from "./vpcsecuritygroupmembership";



// DbInstance
/** 
 * <p>Contains the details of an Amazon Neptune DB instance.</p> <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p>
**/
export class DbInstance extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allocatedStorage?: number;

  @SpeakeasyMetadata()
  autoMinorVersionUpgrade?: boolean;

  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata()
  backupRetentionPeriod?: number;

  @SpeakeasyMetadata()
  caCertificateIdentifier?: string;

  @SpeakeasyMetadata()
  characterSetName?: string;

  @SpeakeasyMetadata()
  copyTagsToSnapshot?: boolean;

  @SpeakeasyMetadata()
  dbClusterIdentifier?: string;

  @SpeakeasyMetadata()
  dbInstanceArn?: string;

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
  masterUsername?: string;

  @SpeakeasyMetadata()
  monitoringInterval?: number;

  @SpeakeasyMetadata()
  monitoringRoleArn?: string;

  @SpeakeasyMetadata()
  multiAz?: boolean;

  @SpeakeasyMetadata({ elemType: OptionGroupMembership })
  optionGroupMemberships?: OptionGroupMembership[];

  @SpeakeasyMetadata()
  pendingModifiedValues?: PendingModifiedValues;

  @SpeakeasyMetadata()
  performanceInsightsEnabled?: boolean;

  @SpeakeasyMetadata()
  performanceInsightsKmsKeyId?: string;

  @SpeakeasyMetadata()
  preferredBackupWindow?: string;

  @SpeakeasyMetadata()
  preferredMaintenanceWindow?: string;

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
  secondaryAvailabilityZone?: string;

  @SpeakeasyMetadata({ elemType: DbInstanceStatusInfo })
  statusInfos?: DbInstanceStatusInfo[];

  @SpeakeasyMetadata()
  storageEncrypted?: boolean;

  @SpeakeasyMetadata()
  storageType?: string;

  @SpeakeasyMetadata()
  tdeCredentialArn?: string;

  @SpeakeasyMetadata()
  timezone?: string;

  @SpeakeasyMetadata({ elemType: VpcSecurityGroupMembership })
  vpcSecurityGroups?: VpcSecurityGroupMembership[];
}
