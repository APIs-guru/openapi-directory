import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetAuthorizeDbSecurityGroupIngressActionEnum {
    AuthorizeDbSecurityGroupIngress = "AuthorizeDBSecurityGroupIngress"
}

export enum GetAuthorizeDbSecurityGroupIngressVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}


export class GetAuthorizeDbSecurityGroupIngressQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAuthorizeDbSecurityGroupIngressActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=CIDRIP" })
  cidrip?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBSecurityGroupName" })
  dbSecurityGroupName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EC2SecurityGroupId" })
  ec2SecurityGroupId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EC2SecurityGroupName" })
  ec2SecurityGroupName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EC2SecurityGroupOwnerId" })
  ec2SecurityGroupOwnerId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAuthorizeDbSecurityGroupIngressVersionEnum;
}


export class GetAuthorizeDbSecurityGroupIngressHeaders extends SpeakeasyBase {
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


export class GetAuthorizeDbSecurityGroupIngressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAuthorizeDbSecurityGroupIngressQueryParams;

  @SpeakeasyMetadata()
  headers: GetAuthorizeDbSecurityGroupIngressHeaders;
}


export class GetAuthorizeDbSecurityGroupIngressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
