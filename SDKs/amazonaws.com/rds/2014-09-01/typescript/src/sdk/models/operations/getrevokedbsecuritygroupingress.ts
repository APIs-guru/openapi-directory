import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetRevokeDbSecurityGroupIngressActionEnum {
    RevokeDbSecurityGroupIngress = "RevokeDBSecurityGroupIngress"
}

export enum GetRevokeDbSecurityGroupIngressVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}


export class GetRevokeDbSecurityGroupIngressQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRevokeDbSecurityGroupIngressActionEnum;

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
  version: GetRevokeDbSecurityGroupIngressVersionEnum;
}


export class GetRevokeDbSecurityGroupIngressHeaders extends SpeakeasyBase {
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


export class GetRevokeDbSecurityGroupIngressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRevokeDbSecurityGroupIngressQueryParams;

  @SpeakeasyMetadata()
  headers: GetRevokeDbSecurityGroupIngressHeaders;
}


export class GetRevokeDbSecurityGroupIngressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
