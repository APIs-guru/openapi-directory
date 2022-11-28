import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActivityStreamModeEnum } from "./activitystreammodeenum";
import { ActivityStreamStatusEnum } from "./activitystreamstatusenum";
import { DbClusterRole } from "./dbclusterrole";
import { DbClusterMember } from "./dbclustermember";
import { DbClusterOptionGroupStatus } from "./dbclusteroptiongroupstatus";
import { DomainMembership } from "./domainmembership";
import { WriteForwardingStatusEnum } from "./writeforwardingstatusenum";
import { ClusterPendingModifiedValues } from "./clusterpendingmodifiedvalues";
import { ScalingConfigurationInfo } from "./scalingconfigurationinfo";
import { Tag } from "./tag";
import { VpcSecurityGroupMembership } from "./vpcsecuritygroupmembership";



// DbCluster
/** 
 * <p>Contains the details of an Amazon Aurora DB cluster. </p> <p>This data type is used as a response element in the <code>DescribeDBClusters</code>, <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions. </p>
**/
export class DbCluster extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ elemType: DbClusterRole })
  associatedRoles?: DbClusterRole[];

  @SpeakeasyMetadata()
  automaticRestartTime?: Date;

  @SpeakeasyMetadata()
  availabilityZones?: string[];

  @SpeakeasyMetadata()
  backtrackConsumedChangeRecords?: number;

  @SpeakeasyMetadata()
  backtrackWindow?: number;

  @SpeakeasyMetadata()
  backupRetentionPeriod?: number;

  @SpeakeasyMetadata()
  capacity?: number;

  @SpeakeasyMetadata()
  characterSetName?: string;

  @SpeakeasyMetadata()
  cloneGroupId?: string;

  @SpeakeasyMetadata()
  clusterCreateTime?: Date;

  @SpeakeasyMetadata()
  copyTagsToSnapshot?: boolean;

  @SpeakeasyMetadata()
  crossAccountClone?: boolean;

  @SpeakeasyMetadata()
  customEndpoints?: string[];

  @SpeakeasyMetadata()
  dbClusterArn?: string;

  @SpeakeasyMetadata()
  dbClusterIdentifier?: string;

  @SpeakeasyMetadata({ elemType: DbClusterMember })
  dbClusterMembers?: DbClusterMember[];

  @SpeakeasyMetadata({ elemType: DbClusterOptionGroupStatus })
  dbClusterOptionGroupMemberships?: DbClusterOptionGroupStatus[];

  @SpeakeasyMetadata()
  dbClusterParameterGroup?: string;

  @SpeakeasyMetadata()
  dbSubnetGroup?: string;

  @SpeakeasyMetadata()
  databaseName?: string;

  @SpeakeasyMetadata()
  dbClusterResourceId?: string;

  @SpeakeasyMetadata()
  deletionProtection?: boolean;

  @SpeakeasyMetadata({ elemType: DomainMembership })
  domainMemberships?: DomainMembership[];

  @SpeakeasyMetadata()
  earliestBacktrackTime?: Date;

  @SpeakeasyMetadata()
  earliestRestorableTime?: Date;

  @SpeakeasyMetadata()
  enabledCloudwatchLogsExports?: string[];

  @SpeakeasyMetadata()
  endpoint?: string;

  @SpeakeasyMetadata()
  engine?: string;

  @SpeakeasyMetadata()
  engineMode?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;

  @SpeakeasyMetadata()
  globalWriteForwardingRequested?: boolean;

  @SpeakeasyMetadata()
  globalWriteForwardingStatus?: WriteForwardingStatusEnum;

  @SpeakeasyMetadata()
  hostedZoneId?: string;

  @SpeakeasyMetadata()
  httpEndpointEnabled?: boolean;

  @SpeakeasyMetadata()
  iamDatabaseAuthenticationEnabled?: boolean;

  @SpeakeasyMetadata()
  kmsKeyId?: string;

  @SpeakeasyMetadata()
  latestRestorableTime?: Date;

  @SpeakeasyMetadata()
  masterUsername?: string;

  @SpeakeasyMetadata()
  multiAz?: boolean;

  @SpeakeasyMetadata()
  pendingModifiedValues?: ClusterPendingModifiedValues;

  @SpeakeasyMetadata()
  percentProgress?: string;

  @SpeakeasyMetadata()
  port?: number;

  @SpeakeasyMetadata()
  preferredBackupWindow?: string;

  @SpeakeasyMetadata()
  preferredMaintenanceWindow?: string;

  @SpeakeasyMetadata()
  readReplicaIdentifiers?: string[];

  @SpeakeasyMetadata()
  readerEndpoint?: string;

  @SpeakeasyMetadata()
  replicationSourceIdentifier?: string;

  @SpeakeasyMetadata()
  scalingConfigurationInfo?: ScalingConfigurationInfo;

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  storageEncrypted?: boolean;

  @SpeakeasyMetadata({ elemType: Tag })
  tagList?: Tag[];

  @SpeakeasyMetadata({ elemType: VpcSecurityGroupMembership })
  vpcSecurityGroups?: VpcSecurityGroupMembership[];
}
