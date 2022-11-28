import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetAuthorizeClusterSecurityGroupIngressActionEnum {
    AuthorizeClusterSecurityGroupIngress = "AuthorizeClusterSecurityGroupIngress"
}

export enum GetAuthorizeClusterSecurityGroupIngressVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetAuthorizeClusterSecurityGroupIngressQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAuthorizeClusterSecurityGroupIngressActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CIDRIP" })
  cidrip?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ClusterSecurityGroupName" })
  clusterSecurityGroupName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EC2SecurityGroupName" })
  ec2SecurityGroupName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EC2SecurityGroupOwnerId" })
  ec2SecurityGroupOwnerId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAuthorizeClusterSecurityGroupIngressVersionEnum;
}


export class GetAuthorizeClusterSecurityGroupIngressHeaders extends SpeakeasyBase {
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


export class GetAuthorizeClusterSecurityGroupIngressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAuthorizeClusterSecurityGroupIngressQueryParams;

  @SpeakeasyMetadata()
  headers: GetAuthorizeClusterSecurityGroupIngressHeaders;
}


export class GetAuthorizeClusterSecurityGroupIngressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
