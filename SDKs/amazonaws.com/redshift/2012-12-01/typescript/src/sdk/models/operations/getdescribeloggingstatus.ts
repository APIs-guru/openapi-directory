import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeLoggingStatusActionEnum {
    DescribeLoggingStatus = "DescribeLoggingStatus"
}

export enum GetDescribeLoggingStatusVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetDescribeLoggingStatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeLoggingStatusActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" })
  clusterIdentifier: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeLoggingStatusVersionEnum;
}


export class GetDescribeLoggingStatusHeaders extends SpeakeasyBase {
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


export class GetDescribeLoggingStatusRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeLoggingStatusQueryParams;

  @Metadata()
  headers: GetDescribeLoggingStatusHeaders;
}


export class GetDescribeLoggingStatusResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
