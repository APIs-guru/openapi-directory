import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsRedshiftClusterClusterNode } from "./awsredshiftclusterclusternode";
import { AwsRedshiftClusterClusterParameterGroup } from "./awsredshiftclusterclusterparametergroup";
import { AwsRedshiftClusterClusterSecurityGroup } from "./awsredshiftclusterclustersecuritygroup";
import { AwsRedshiftClusterClusterSnapshotCopyStatus } from "./awsredshiftclusterclustersnapshotcopystatus";
import { AwsRedshiftClusterDeferredMaintenanceWindow } from "./awsredshiftclusterdeferredmaintenancewindow";
import { AwsRedshiftClusterElasticIpStatus } from "./awsredshiftclusterelasticipstatus";
import { AwsRedshiftClusterEndpoint } from "./awsredshiftclusterendpoint";
import { AwsRedshiftClusterHsmStatus } from "./awsredshiftclusterhsmstatus";
import { AwsRedshiftClusterIamRole } from "./awsredshiftclusteriamrole";
import { AwsRedshiftClusterPendingModifiedValues } from "./awsredshiftclusterpendingmodifiedvalues";
import { AwsRedshiftClusterResizeInfo } from "./awsredshiftclusterresizeinfo";
import { AwsRedshiftClusterRestoreStatus } from "./awsredshiftclusterrestorestatus";
import { AwsRedshiftClusterVpcSecurityGroup } from "./awsredshiftclustervpcsecuritygroup";



// AwsRedshiftClusterDetails
/** 
 * Details about an Amazon Redshift cluster.
**/
export class AwsRedshiftClusterDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowVersionUpgrade" })
  allowVersionUpgrade?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AutomatedSnapshotRetentionPeriod" })
  automatedSnapshotRetentionPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=AvailabilityZone" })
  availabilityZone?: string;

  @SpeakeasyMetadata({ data: "json, name=ClusterAvailabilityStatus" })
  clusterAvailabilityStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=ClusterCreateTime" })
  clusterCreateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=ClusterIdentifier" })
  clusterIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=ClusterNodes", elemType: AwsRedshiftClusterClusterNode })
  clusterNodes?: AwsRedshiftClusterClusterNode[];

  @SpeakeasyMetadata({ data: "json, name=ClusterParameterGroups", elemType: AwsRedshiftClusterClusterParameterGroup })
  clusterParameterGroups?: AwsRedshiftClusterClusterParameterGroup[];

  @SpeakeasyMetadata({ data: "json, name=ClusterPublicKey" })
  clusterPublicKey?: string;

  @SpeakeasyMetadata({ data: "json, name=ClusterRevisionNumber" })
  clusterRevisionNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=ClusterSecurityGroups", elemType: AwsRedshiftClusterClusterSecurityGroup })
  clusterSecurityGroups?: AwsRedshiftClusterClusterSecurityGroup[];

  @SpeakeasyMetadata({ data: "json, name=ClusterSnapshotCopyStatus" })
  clusterSnapshotCopyStatus?: AwsRedshiftClusterClusterSnapshotCopyStatus;

  @SpeakeasyMetadata({ data: "json, name=ClusterStatus" })
  clusterStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=ClusterSubnetGroupName" })
  clusterSubnetGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=ClusterVersion" })
  clusterVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=DBName" })
  dbName?: string;

  @SpeakeasyMetadata({ data: "json, name=DeferredMaintenanceWindows", elemType: AwsRedshiftClusterDeferredMaintenanceWindow })
  deferredMaintenanceWindows?: AwsRedshiftClusterDeferredMaintenanceWindow[];

  @SpeakeasyMetadata({ data: "json, name=ElasticIpStatus" })
  elasticIpStatus?: AwsRedshiftClusterElasticIpStatus;

  @SpeakeasyMetadata({ data: "json, name=ElasticResizeNumberOfNodeOptions" })
  elasticResizeNumberOfNodeOptions?: string;

  @SpeakeasyMetadata({ data: "json, name=Encrypted" })
  encrypted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Endpoint" })
  endpoint?: AwsRedshiftClusterEndpoint;

  @SpeakeasyMetadata({ data: "json, name=EnhancedVpcRouting" })
  enhancedVpcRouting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ExpectedNextSnapshotScheduleTime" })
  expectedNextSnapshotScheduleTime?: string;

  @SpeakeasyMetadata({ data: "json, name=ExpectedNextSnapshotScheduleTimeStatus" })
  expectedNextSnapshotScheduleTimeStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=HsmStatus" })
  hsmStatus?: AwsRedshiftClusterHsmStatus;

  @SpeakeasyMetadata({ data: "json, name=IamRoles", elemType: AwsRedshiftClusterIamRole })
  iamRoles?: AwsRedshiftClusterIamRole[];

  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=MaintenanceTrackName" })
  maintenanceTrackName?: string;

  @SpeakeasyMetadata({ data: "json, name=ManualSnapshotRetentionPeriod" })
  manualSnapshotRetentionPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=MasterUsername" })
  masterUsername?: string;

  @SpeakeasyMetadata({ data: "json, name=NextMaintenanceWindowStartTime" })
  nextMaintenanceWindowStartTime?: string;

  @SpeakeasyMetadata({ data: "json, name=NodeType" })
  nodeType?: string;

  @SpeakeasyMetadata({ data: "json, name=NumberOfNodes" })
  numberOfNodes?: number;

  @SpeakeasyMetadata({ data: "json, name=PendingActions" })
  pendingActions?: string[];

  @SpeakeasyMetadata({ data: "json, name=PendingModifiedValues" })
  pendingModifiedValues?: AwsRedshiftClusterPendingModifiedValues;

  @SpeakeasyMetadata({ data: "json, name=PreferredMaintenanceWindow" })
  preferredMaintenanceWindow?: string;

  @SpeakeasyMetadata({ data: "json, name=PubliclyAccessible" })
  publiclyAccessible?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ResizeInfo" })
  resizeInfo?: AwsRedshiftClusterResizeInfo;

  @SpeakeasyMetadata({ data: "json, name=RestoreStatus" })
  restoreStatus?: AwsRedshiftClusterRestoreStatus;

  @SpeakeasyMetadata({ data: "json, name=SnapshotScheduleIdentifier" })
  snapshotScheduleIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=SnapshotScheduleState" })
  snapshotScheduleState?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcSecurityGroups", elemType: AwsRedshiftClusterVpcSecurityGroup })
  vpcSecurityGroups?: AwsRedshiftClusterVpcSecurityGroup[];
}
