import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetRevokeClusterSecurityGroupIngressActionEnum {
    RevokeClusterSecurityGroupIngress = "RevokeClusterSecurityGroupIngress"
}

export enum GetRevokeClusterSecurityGroupIngressVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetRevokeClusterSecurityGroupIngressQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRevokeClusterSecurityGroupIngressActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CIDRIP" })
  cidrip?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClusterSecurityGroupName" })
  clusterSecurityGroupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EC2SecurityGroupName" })
  ec2SecurityGroupName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EC2SecurityGroupOwnerId" })
  ec2SecurityGroupOwnerId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRevokeClusterSecurityGroupIngressVersionEnum;
}


export class GetRevokeClusterSecurityGroupIngressHeaders extends SpeakeasyBase {
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


export class GetRevokeClusterSecurityGroupIngressRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRevokeClusterSecurityGroupIngressQueryParams;

  @Metadata()
  headers: GetRevokeClusterSecurityGroupIngressHeaders;
}


export class GetRevokeClusterSecurityGroupIngressResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
