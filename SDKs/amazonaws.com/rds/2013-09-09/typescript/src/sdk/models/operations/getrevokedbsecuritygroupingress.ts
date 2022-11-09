import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetRevokeDbSecurityGroupIngressActionEnum {
    RevokeDbSecurityGroupIngress = "RevokeDBSecurityGroupIngress"
}

export enum GetRevokeDbSecurityGroupIngressVersionEnum {
    TwoThousandAndThirteen0909 = "2013-09-09"
}


export class GetRevokeDbSecurityGroupIngressQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRevokeDbSecurityGroupIngressActionEnum;

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
  version: GetRevokeDbSecurityGroupIngressVersionEnum;
}


export class GetRevokeDbSecurityGroupIngressHeaders extends SpeakeasyBase {
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


export class GetRevokeDbSecurityGroupIngressRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRevokeDbSecurityGroupIngressQueryParams;

  @Metadata()
  headers: GetRevokeDbSecurityGroupIngressHeaders;
}


export class GetRevokeDbSecurityGroupIngressResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
