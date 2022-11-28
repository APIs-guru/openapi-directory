import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDeregisterDbProxyTargetsActionEnum {
    DeregisterDbProxyTargets = "DeregisterDBProxyTargets"
}

export enum GetDeregisterDbProxyTargetsVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetDeregisterDbProxyTargetsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDeregisterDbProxyTargetsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBClusterIdentifiers" })
  dbClusterIdentifiers?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBInstanceIdentifiers" })
  dbInstanceIdentifiers?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBProxyName" })
  dbProxyName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TargetGroupName" })
  targetGroupName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDeregisterDbProxyTargetsVersionEnum;
}


export class GetDeregisterDbProxyTargetsHeaders extends SpeakeasyBase {
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


export class GetDeregisterDbProxyTargetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDeregisterDbProxyTargetsQueryParams;

  @SpeakeasyMetadata()
  headers: GetDeregisterDbProxyTargetsHeaders;
}


export class GetDeregisterDbProxyTargetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
