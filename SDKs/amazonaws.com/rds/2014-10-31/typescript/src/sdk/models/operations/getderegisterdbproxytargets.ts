import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDeregisterDbProxyTargetsActionEnum {
    DeregisterDbProxyTargets = "DeregisterDBProxyTargets"
}

export enum GetDeregisterDbProxyTargetsVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetDeregisterDbProxyTargetsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeregisterDbProxyTargetsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBClusterIdentifiers" })
  dbClusterIdentifiers?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBInstanceIdentifiers" })
  dbInstanceIdentifiers?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBProxyName" })
  dbProxyName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TargetGroupName" })
  targetGroupName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeregisterDbProxyTargetsVersionEnum;
}


export class GetDeregisterDbProxyTargetsHeaders extends SpeakeasyBase {
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


export class GetDeregisterDbProxyTargetsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDeregisterDbProxyTargetsQueryParams;

  @Metadata()
  headers: GetDeregisterDbProxyTargetsHeaders;
}


export class GetDeregisterDbProxyTargetsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
