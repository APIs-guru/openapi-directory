import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetModifyDbProxyTargetGroupActionEnum {
    ModifyDbProxyTargetGroup = "ModifyDBProxyTargetGroup"
}


// GetModifyDbProxyTargetGroupConnectionPoolConfig
/** 
 * Specifies the settings that control the size and behavior of the connection pool associated with a <code>DBProxyTargetGroup</code>.
**/
export class GetModifyDbProxyTargetGroupConnectionPoolConfig extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=ConnectionBorrowTimeout" })
  connectionBorrowTimeout?: number;

  @Metadata({ data: "queryParam, name=InitQuery" })
  initQuery?: string;

  @Metadata({ data: "queryParam, name=MaxConnectionsPercent" })
  maxConnectionsPercent?: number;

  @Metadata({ data: "queryParam, name=MaxIdleConnectionsPercent" })
  maxIdleConnectionsPercent?: number;

  @Metadata({ data: "queryParam, name=SessionPinningFilters" })
  sessionPinningFilters?: string[];
}

export enum GetModifyDbProxyTargetGroupVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}


export class GetModifyDbProxyTargetGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetModifyDbProxyTargetGroupActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ConnectionPoolConfig" })
  connectionPoolConfig?: GetModifyDbProxyTargetGroupConnectionPoolConfig;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DBProxyName" })
  dbProxyName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NewName" })
  newName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TargetGroupName" })
  targetGroupName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetModifyDbProxyTargetGroupVersionEnum;
}


export class GetModifyDbProxyTargetGroupHeaders extends SpeakeasyBase {
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


export class GetModifyDbProxyTargetGroupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModifyDbProxyTargetGroupQueryParams;

  @Metadata()
  headers: GetModifyDbProxyTargetGroupHeaders;
}


export class GetModifyDbProxyTargetGroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
