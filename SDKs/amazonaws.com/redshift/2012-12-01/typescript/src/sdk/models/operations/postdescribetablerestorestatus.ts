import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostDescribeTableRestoreStatusActionEnum {
    DescribeTableRestoreStatus = "DescribeTableRestoreStatus"
}

export enum PostDescribeTableRestoreStatusVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class PostDescribeTableRestoreStatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDescribeTableRestoreStatusActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDescribeTableRestoreStatusVersionEnum;
}


export class PostDescribeTableRestoreStatusHeaders extends SpeakeasyBase {
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


export class PostDescribeTableRestoreStatusRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostDescribeTableRestoreStatusQueryParams;

  @Metadata()
  headers: PostDescribeTableRestoreStatusHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDescribeTableRestoreStatusResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
