import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetAuthorizeDbSecurityGroupIngressActionEnum {
    AuthorizeDbSecurityGroupIngress = "AuthorizeDBSecurityGroupIngress"
}

export enum GetAuthorizeDbSecurityGroupIngressVersionEnum {
    TwoThousandAndThirteen0909 = "2013-09-09"
}


export class GetAuthorizeDbSecurityGroupIngressQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetAuthorizeDbSecurityGroupIngressActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=CIDRIP" })
  cidrip?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBSecurityGroupName" })
  dbSecurityGroupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EC2SecurityGroupId" })
  ec2SecurityGroupId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EC2SecurityGroupName" })
  ec2SecurityGroupName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EC2SecurityGroupOwnerId" })
  ec2SecurityGroupOwnerId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetAuthorizeDbSecurityGroupIngressVersionEnum;
}


export class GetAuthorizeDbSecurityGroupIngressHeaders extends SpeakeasyBase {
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


export class GetAuthorizeDbSecurityGroupIngressRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAuthorizeDbSecurityGroupIngressQueryParams;

  @Metadata()
  headers: GetAuthorizeDbSecurityGroupIngressHeaders;
}


export class GetAuthorizeDbSecurityGroupIngressResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
