import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetRevokeClusterSecurityGroupIngressActionEnum {
    RevokeClusterSecurityGroupIngress = "RevokeClusterSecurityGroupIngress"
}

export enum GetRevokeClusterSecurityGroupIngressVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetRevokeClusterSecurityGroupIngressQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRevokeClusterSecurityGroupIngressActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CIDRIP" })
  cidrip?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClusterSecurityGroupName" })
  clusterSecurityGroupName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EC2SecurityGroupName" })
  ec2SecurityGroupName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EC2SecurityGroupOwnerId" })
  ec2SecurityGroupOwnerId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRevokeClusterSecurityGroupIngressVersionEnum;
}


export class GetRevokeClusterSecurityGroupIngressHeaders extends SpeakeasyBase {
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


export class GetRevokeClusterSecurityGroupIngressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRevokeClusterSecurityGroupIngressQueryParams;

  @SpeakeasyMetadata()
  headers: GetRevokeClusterSecurityGroupIngressHeaders;
}


export class GetRevokeClusterSecurityGroupIngressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
