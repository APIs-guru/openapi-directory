import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=AllowVersionUpgrade" })
  allowVersionUpgrade?: boolean;

  @Metadata({ data: "json, name=AutomatedSnapshotRetentionPeriod" })
  automatedSnapshotRetentionPeriod?: number;

  @Metadata({ data: "json, name=AvailabilityZone" })
  availabilityZone?: string;

  @Metadata({ data: "json, name=ClusterAvailabilityStatus" })
  clusterAvailabilityStatus?: string;

  @Metadata({ data: "json, name=ClusterCreateTime" })
  clusterCreateTime?: string;

  @Metadata({ data: "json, name=ClusterIdentifier" })
  clusterIdentifier?: string;

  @Metadata({ data: "json, name=ClusterNodes", elemType: shared.AwsRedshiftClusterClusterNode })
  clusterNodes?: AwsRedshiftClusterClusterNode[];

  @Metadata({ data: "json, name=ClusterParameterGroups", elemType: shared.AwsRedshiftClusterClusterParameterGroup })
  clusterParameterGroups?: AwsRedshiftClusterClusterParameterGroup[];

  @Metadata({ data: "json, name=ClusterPublicKey" })
  clusterPublicKey?: string;

  @Metadata({ data: "json, name=ClusterRevisionNumber" })
  clusterRevisionNumber?: string;

  @Metadata({ data: "json, name=ClusterSecurityGroups", elemType: shared.AwsRedshiftClusterClusterSecurityGroup })
  clusterSecurityGroups?: AwsRedshiftClusterClusterSecurityGroup[];

  @Metadata({ data: "json, name=ClusterSnapshotCopyStatus" })
  clusterSnapshotCopyStatus?: AwsRedshiftClusterClusterSnapshotCopyStatus;

  @Metadata({ data: "json, name=ClusterStatus" })
  clusterStatus?: string;

  @Metadata({ data: "json, name=ClusterSubnetGroupName" })
  clusterSubnetGroupName?: string;

  @Metadata({ data: "json, name=ClusterVersion" })
  clusterVersion?: string;

  @Metadata({ data: "json, name=DBName" })
  dbName?: string;

  @Metadata({ data: "json, name=DeferredMaintenanceWindows", elemType: shared.AwsRedshiftClusterDeferredMaintenanceWindow })
  deferredMaintenanceWindows?: AwsRedshiftClusterDeferredMaintenanceWindow[];

  @Metadata({ data: "json, name=ElasticIpStatus" })
  elasticIpStatus?: AwsRedshiftClusterElasticIpStatus;

  @Metadata({ data: "json, name=ElasticResizeNumberOfNodeOptions" })
  elasticResizeNumberOfNodeOptions?: string;

  @Metadata({ data: "json, name=Encrypted" })
  encrypted?: boolean;

  @Metadata({ data: "json, name=Endpoint" })
  endpoint?: AwsRedshiftClusterEndpoint;

  @Metadata({ data: "json, name=EnhancedVpcRouting" })
  enhancedVpcRouting?: boolean;

  @Metadata({ data: "json, name=ExpectedNextSnapshotScheduleTime" })
  expectedNextSnapshotScheduleTime?: string;

  @Metadata({ data: "json, name=ExpectedNextSnapshotScheduleTimeStatus" })
  expectedNextSnapshotScheduleTimeStatus?: string;

  @Metadata({ data: "json, name=HsmStatus" })
  hsmStatus?: AwsRedshiftClusterHsmStatus;

  @Metadata({ data: "json, name=IamRoles", elemType: shared.AwsRedshiftClusterIamRole })
  iamRoles?: AwsRedshiftClusterIamRole[];

  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=MaintenanceTrackName" })
  maintenanceTrackName?: string;

  @Metadata({ data: "json, name=ManualSnapshotRetentionPeriod" })
  manualSnapshotRetentionPeriod?: number;

  @Metadata({ data: "json, name=MasterUsername" })
  masterUsername?: string;

  @Metadata({ data: "json, name=NextMaintenanceWindowStartTime" })
  nextMaintenanceWindowStartTime?: string;

  @Metadata({ data: "json, name=NodeType" })
  nodeType?: string;

  @Metadata({ data: "json, name=NumberOfNodes" })
  numberOfNodes?: number;

  @Metadata({ data: "json, name=PendingActions" })
  pendingActions?: string[];

  @Metadata({ data: "json, name=PendingModifiedValues" })
  pendingModifiedValues?: AwsRedshiftClusterPendingModifiedValues;

  @Metadata({ data: "json, name=PreferredMaintenanceWindow" })
  preferredMaintenanceWindow?: string;

  @Metadata({ data: "json, name=PubliclyAccessible" })
  publiclyAccessible?: boolean;

  @Metadata({ data: "json, name=ResizeInfo" })
  resizeInfo?: AwsRedshiftClusterResizeInfo;

  @Metadata({ data: "json, name=RestoreStatus" })
  restoreStatus?: AwsRedshiftClusterRestoreStatus;

  @Metadata({ data: "json, name=SnapshotScheduleIdentifier" })
  snapshotScheduleIdentifier?: string;

  @Metadata({ data: "json, name=SnapshotScheduleState" })
  snapshotScheduleState?: string;

  @Metadata({ data: "json, name=VpcId" })
  vpcId?: string;

  @Metadata({ data: "json, name=VpcSecurityGroups", elemType: shared.AwsRedshiftClusterVpcSecurityGroup })
  vpcSecurityGroups?: AwsRedshiftClusterVpcSecurityGroup[];
}
