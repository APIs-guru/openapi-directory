import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostDescribeOrderableDbInstanceOptionsActionEnum {
    DescribeOrderableDbInstanceOptions = "DescribeOrderableDBInstanceOptions"
}

export enum PostDescribeOrderableDbInstanceOptionsVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}


export class PostDescribeOrderableDbInstanceOptionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDescribeOrderableDbInstanceOptionsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDescribeOrderableDbInstanceOptionsVersionEnum;
}


export class PostDescribeOrderableDbInstanceOptionsHeaders extends SpeakeasyBase {
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


export class PostDescribeOrderableDbInstanceOptionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostDescribeOrderableDbInstanceOptionsQueryParams;

  @Metadata()
  headers: PostDescribeOrderableDbInstanceOptionsHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDescribeOrderableDbInstanceOptionsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
