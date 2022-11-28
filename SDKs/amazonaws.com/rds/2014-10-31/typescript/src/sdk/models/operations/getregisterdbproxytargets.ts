import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetRegisterDbProxyTargetsActionEnum {
    RegisterDbProxyTargets = "RegisterDBProxyTargets"
}

export enum GetRegisterDbProxyTargetsVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetRegisterDbProxyTargetsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetRegisterDbProxyTargetsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBClusterIdentifiers" })
  dbClusterIdentifiers?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBInstanceIdentifiers" })
  dbInstanceIdentifiers?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBProxyName" })
  dbProxyName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TargetGroupName" })
  targetGroupName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetRegisterDbProxyTargetsVersionEnum;
}


export class GetRegisterDbProxyTargetsHeaders extends SpeakeasyBase {
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


export class GetRegisterDbProxyTargetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRegisterDbProxyTargetsQueryParams;

  @SpeakeasyMetadata()
  headers: GetRegisterDbProxyTargetsHeaders;
}


export class GetRegisterDbProxyTargetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
