import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeTableRestoreStatusActionEnum {
    DescribeTableRestoreStatus = "DescribeTableRestoreStatus"
}

export enum GetDescribeTableRestoreStatusVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetDescribeTableRestoreStatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeTableRestoreStatusActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" })
  clusterIdentifier?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TableRestoreRequestId" })
  tableRestoreRequestId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeTableRestoreStatusVersionEnum;
}


export class GetDescribeTableRestoreStatusHeaders extends SpeakeasyBase {
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


export class GetDescribeTableRestoreStatusRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeTableRestoreStatusQueryParams;

  @Metadata()
  headers: GetDescribeTableRestoreStatusHeaders;
}


export class GetDescribeTableRestoreStatusResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
