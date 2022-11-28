import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetRestoreFromClusterSnapshotActionEnum {
    RestoreFromClusterSnapshot = "RestoreFromClusterSnapshot"
}

export enum GetRestoreFromClusterSnapshotAquaConfigurationStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled",
    Auto = "auto"
}

export enum GetRestoreFromClusterSnapshotVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetRestoreFromClusterSnapshotQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRestoreFromClusterSnapshotActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AdditionalInfo" })
  additionalInfo?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AllowVersionUpgrade" })
  allowVersionUpgrade?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AquaConfigurationStatus" })
  aquaConfigurationStatus?: GetRestoreFromClusterSnapshotAquaConfigurationStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AutomatedSnapshotRetentionPeriod" })
  automatedSnapshotRetentionPeriod?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AvailabilityZone" })
  availabilityZone?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AvailabilityZoneRelocation" })
  availabilityZoneRelocation?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" })
  clusterIdentifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClusterParameterGroupName" })
  clusterParameterGroupName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClusterSecurityGroups" })
  clusterSecurityGroups?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClusterSubnetGroupName" })
  clusterSubnetGroupName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ElasticIp" })
  elasticIp?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EnhancedVpcRouting" })
  enhancedVpcRouting?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HsmClientCertificateIdentifier" })
  hsmClientCertificateIdentifier?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HsmConfigurationIdentifier" })
  hsmConfigurationIdentifier?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=IamRoles" })
  iamRoles?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=KmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaintenanceTrackName" })
  maintenanceTrackName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ManualSnapshotRetentionPeriod" })
  manualSnapshotRetentionPeriod?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NodeType" })
  nodeType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NumberOfNodes" })
  numberOfNodes?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=OwnerAccount" })
  ownerAccount?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Port" })
  port?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PreferredMaintenanceWindow" })
  preferredMaintenanceWindow?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PubliclyAccessible" })
  publiclyAccessible?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SnapshotClusterIdentifier" })
  snapshotClusterIdentifier?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SnapshotIdentifier" })
  snapshotIdentifier: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SnapshotScheduleIdentifier" })
  snapshotScheduleIdentifier?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRestoreFromClusterSnapshotVersionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VpcSecurityGroupIds" })
  vpcSecurityGroupIds?: string[];
}


export class GetRestoreFromClusterSnapshotHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetRestoreFromClusterSnapshotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRestoreFromClusterSnapshotQueryParams;

  @SpeakeasyMetadata()
  headers: GetRestoreFromClusterSnapshotHeaders;
}


export class GetRestoreFromClusterSnapshotResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
