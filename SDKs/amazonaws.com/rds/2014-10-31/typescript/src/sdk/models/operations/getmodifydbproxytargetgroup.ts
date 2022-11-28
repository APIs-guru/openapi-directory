import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetModifyDbProxyTargetGroupActionEnum {
    ModifyDbProxyTargetGroup = "ModifyDBProxyTargetGroup"
}


// GetModifyDbProxyTargetGroupConnectionPoolConfig
/** 
 * Specifies the settings that control the size and behavior of the connection pool associated with a <code>DBProxyTargetGroup</code>.
**/
export class GetModifyDbProxyTargetGroupConnectionPoolConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=ConnectionBorrowTimeout" })
  connectionBorrowTimeout?: number;

  @SpeakeasyMetadata({ data: "queryParam, name=InitQuery" })
  initQuery?: string;

  @SpeakeasyMetadata({ data: "queryParam, name=MaxConnectionsPercent" })
  maxConnectionsPercent?: number;

  @SpeakeasyMetadata({ data: "queryParam, name=MaxIdleConnectionsPercent" })
  maxIdleConnectionsPercent?: number;

  @SpeakeasyMetadata({ data: "queryParam, name=SessionPinningFilters" })
  sessionPinningFilters?: string[];
}

export enum GetModifyDbProxyTargetGroupVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetModifyDbProxyTargetGroupQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyDbProxyTargetGroupActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ConnectionPoolConfig" })
  connectionPoolConfig?: GetModifyDbProxyTargetGroupConnectionPoolConfig;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DBProxyName" })
  dbProxyName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NewName" })
  newName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TargetGroupName" })
  targetGroupName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyDbProxyTargetGroupVersionEnum;
}


export class GetModifyDbProxyTargetGroupHeaders extends SpeakeasyBase {
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


export class GetModifyDbProxyTargetGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModifyDbProxyTargetGroupQueryParams;

  @SpeakeasyMetadata()
  headers: GetModifyDbProxyTargetGroupHeaders;
}


export class GetModifyDbProxyTargetGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
