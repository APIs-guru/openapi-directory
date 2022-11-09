import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetRestoreFromClusterSnapshotActionEnum {
    RestoreFromClusterSnapshot = "RestoreFromClusterSnapshot"
}

export enum GetRestoreFromClusterSnapshotAquaConfigurationStatusEnum {
    Enabled = "enabled"
,    Disabled = "disabled"
,    Auto = "auto"
}

export enum GetRestoreFromClusterSnapshotVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetRestoreFromClusterSnapshotQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRestoreFromClusterSnapshotActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AdditionalInfo" })
  additionalInfo?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AllowVersionUpgrade" })
  allowVersionUpgrade?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AquaConfigurationStatus" })
  aquaConfigurationStatus?: GetRestoreFromClusterSnapshotAquaConfigurationStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AutomatedSnapshotRetentionPeriod" })
  automatedSnapshotRetentionPeriod?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AvailabilityZone" })
  availabilityZone?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AvailabilityZoneRelocation" })
  availabilityZoneRelocation?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" })
  clusterIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClusterParameterGroupName" })
  clusterParameterGroupName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClusterSecurityGroups" })
  clusterSecurityGroups?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClusterSubnetGroupName" })
  clusterSubnetGroupName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ElasticIp" })
  elasticIp?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EnhancedVpcRouting" })
  enhancedVpcRouting?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=HsmClientCertificateIdentifier" })
  hsmClientCertificateIdentifier?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=HsmConfigurationIdentifier" })
  hsmConfigurationIdentifier?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=IamRoles" })
  iamRoles?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaintenanceTrackName" })
  maintenanceTrackName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ManualSnapshotRetentionPeriod" })
  manualSnapshotRetentionPeriod?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NodeType" })
  nodeType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NumberOfNodes" })
  numberOfNodes?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=OwnerAccount" })
  ownerAccount?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Port" })
  port?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PreferredMaintenanceWindow" })
  preferredMaintenanceWindow?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PubliclyAccessible" })
  publiclyAccessible?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SnapshotClusterIdentifier" })
  snapshotClusterIdentifier?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SnapshotIdentifier" })
  snapshotIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=SnapshotScheduleIdentifier" })
  snapshotScheduleIdentifier?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRestoreFromClusterSnapshotVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VpcSecurityGroupIds" })
  vpcSecurityGroupIds?: string[];
}


export class GetRestoreFromClusterSnapshotHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetRestoreFromClusterSnapshotRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRestoreFromClusterSnapshotQueryParams;

  @Metadata()
  headers: GetRestoreFromClusterSnapshotHeaders;
}


export class GetRestoreFromClusterSnapshotResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
