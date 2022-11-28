import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AquaConfiguration } from "./aquaconfiguration";
import { ClusterNode } from "./clusternode";
import { ClusterParameterGroupStatus } from "./clusterparametergroupstatus";
import { ClusterSecurityGroupMembership } from "./clustersecuritygroupmembership";
import { ClusterSnapshotCopyStatus } from "./clustersnapshotcopystatus";
import { DataTransferProgress } from "./datatransferprogress";
import { DeferredMaintenanceWindow } from "./deferredmaintenancewindow";
import { ElasticIpStatus } from "./elasticipstatus";
import { Endpoint } from "./endpoint";
import { HsmStatus } from "./hsmstatus";
import { ClusterIamRole } from "./clusteriamrole";
import { PendingModifiedValues } from "./pendingmodifiedvalues";
import { ResizeInfo } from "./resizeinfo";
import { RestoreStatus } from "./restorestatus";
import { ScheduleStateEnum } from "./schedulestateenum";
import { Tag } from "./tag";
import { VpcSecurityGroupMembership } from "./vpcsecuritygroupmembership";



// Cluster
/** 
 * Describes a cluster.
**/
export class Cluster extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allowVersionUpgrade?: boolean;

  @SpeakeasyMetadata()
  aquaConfiguration?: AquaConfiguration;

  @SpeakeasyMetadata()
  automatedSnapshotRetentionPeriod?: number;

  @SpeakeasyMetadata()
  availabilityZone?: string;

  @SpeakeasyMetadata()
  availabilityZoneRelocationStatus?: string;

  @SpeakeasyMetadata()
  clusterAvailabilityStatus?: string;

  @SpeakeasyMetadata()
  clusterCreateTime?: Date;

  @SpeakeasyMetadata()
  clusterIdentifier?: string;

  @SpeakeasyMetadata()
  clusterNamespaceArn?: string;

  @SpeakeasyMetadata({ elemType: ClusterNode })
  clusterNodes?: ClusterNode[];

  @SpeakeasyMetadata({ elemType: ClusterParameterGroupStatus })
  clusterParameterGroups?: ClusterParameterGroupStatus[];

  @SpeakeasyMetadata()
  clusterPublicKey?: string;

  @SpeakeasyMetadata()
  clusterRevisionNumber?: string;

  @SpeakeasyMetadata({ elemType: ClusterSecurityGroupMembership })
  clusterSecurityGroups?: ClusterSecurityGroupMembership[];

  @SpeakeasyMetadata()
  clusterSnapshotCopyStatus?: ClusterSnapshotCopyStatus;

  @SpeakeasyMetadata()
  clusterStatus?: string;

  @SpeakeasyMetadata()
  clusterSubnetGroupName?: string;

  @SpeakeasyMetadata()
  clusterVersion?: string;

  @SpeakeasyMetadata()
  dbName?: string;

  @SpeakeasyMetadata()
  dataTransferProgress?: DataTransferProgress;

  @SpeakeasyMetadata({ elemType: DeferredMaintenanceWindow })
  deferredMaintenanceWindows?: DeferredMaintenanceWindow[];

  @SpeakeasyMetadata()
  elasticIpStatus?: ElasticIpStatus;

  @SpeakeasyMetadata()
  elasticResizeNumberOfNodeOptions?: string;

  @SpeakeasyMetadata()
  encrypted?: boolean;

  @SpeakeasyMetadata()
  endpoint?: Endpoint;

  @SpeakeasyMetadata()
  enhancedVpcRouting?: boolean;

  @SpeakeasyMetadata()
  expectedNextSnapshotScheduleTime?: Date;

  @SpeakeasyMetadata()
  expectedNextSnapshotScheduleTimeStatus?: string;

  @SpeakeasyMetadata()
  hsmStatus?: HsmStatus;

  @SpeakeasyMetadata({ elemType: ClusterIamRole })
  iamRoles?: ClusterIamRole[];

  @SpeakeasyMetadata()
  kmsKeyId?: string;

  @SpeakeasyMetadata()
  maintenanceTrackName?: string;

  @SpeakeasyMetadata()
  manualSnapshotRetentionPeriod?: number;

  @SpeakeasyMetadata()
  masterUsername?: string;

  @SpeakeasyMetadata()
  modifyStatus?: string;

  @SpeakeasyMetadata()
  nextMaintenanceWindowStartTime?: Date;

  @SpeakeasyMetadata()
  nodeType?: string;

  @SpeakeasyMetadata()
  numberOfNodes?: number;

  @SpeakeasyMetadata()
  pendingActions?: string[];

  @SpeakeasyMetadata()
  pendingModifiedValues?: PendingModifiedValues;

  @SpeakeasyMetadata()
  preferredMaintenanceWindow?: string;

  @SpeakeasyMetadata()
  publiclyAccessible?: boolean;

  @SpeakeasyMetadata()
  resizeInfo?: ResizeInfo;

  @SpeakeasyMetadata()
  restoreStatus?: RestoreStatus;

  @SpeakeasyMetadata()
  snapshotScheduleIdentifier?: string;

  @SpeakeasyMetadata()
  snapshotScheduleState?: ScheduleStateEnum;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata()
  totalStorageCapacityInMegaBytes?: number;

  @SpeakeasyMetadata()
  vpcId?: string;

  @SpeakeasyMetadata({ elemType: VpcSecurityGroupMembership })
  vpcSecurityGroups?: VpcSecurityGroupMembership[];
}
