import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetModifyClusterActionEnum {
    ModifyCluster = "ModifyCluster"
}

export enum GetModifyClusterVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetModifyClusterQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyClusterActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=AllowVersionUpgrade" })
  allowVersionUpgrade?: boolean;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClusterType" })
  clusterType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClusterVersion" })
  clusterVersion?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ElasticIp" })
  elasticIp?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Encrypted" })
  encrypted?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EnhancedVpcRouting" })
  enhancedVpcRouting?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=HsmClientCertificateIdentifier" })
  hsmClientCertificateIdentifier?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=HsmConfigurationIdentifier" })
  hsmConfigurationIdentifier?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=KmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaintenanceTrackName" })
  maintenanceTrackName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ManualSnapshotRetentionPeriod" })
  manualSnapshotRetentionPeriod?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MasterUserPassword" })
  masterUserPassword?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NewClusterIdentifier" })
  newClusterIdentifier?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NodeType" })
  nodeType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NumberOfNodes" })
  numberOfNodes?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Port" })
  port?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PreferredMaintenanceWindow" })
  preferredMaintenanceWindow?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PubliclyAccessible" })
  publiclyAccessible?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyClusterVersionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VpcSecurityGroupIds" })
  vpcSecurityGroupIds?: string[];
}


export class GetModifyClusterHeaders extends SpeakeasyBase {
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


export class GetModifyClusterRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyClusterQueryParams;

  @Metadata()
  headers: GetModifyClusterHeaders;
}


export class GetModifyClusterResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
