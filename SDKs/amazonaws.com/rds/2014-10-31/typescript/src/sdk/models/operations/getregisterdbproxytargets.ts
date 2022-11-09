import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetRegisterDbProxyTargetsActionEnum {
    RegisterDbProxyTargets = "RegisterDBProxyTargets"
}

export enum GetRegisterDbProxyTargetsVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetRegisterDbProxyTargetsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRegisterDbProxyTargetsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBClusterIdentifiers" })
  dbClusterIdentifiers?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBInstanceIdentifiers" })
  dbInstanceIdentifiers?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBProxyName" })
  dbProxyName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TargetGroupName" })
  targetGroupName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRegisterDbProxyTargetsVersionEnum;
}


export class GetRegisterDbProxyTargetsHeaders extends SpeakeasyBase {
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


export class GetRegisterDbProxyTargetsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRegisterDbProxyTargetsQueryParams;

  @Metadata()
  headers: GetRegisterDbProxyTargetsHeaders;
}


export class GetRegisterDbProxyTargetsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
