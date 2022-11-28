import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostDescribeOptionGroupsActionEnum {
    DescribeOptionGroups = "DescribeOptionGroups"
}

export enum PostDescribeOptionGroupsVersionEnum {
    TwoThousandAndThirteen0909 = "2013-09-09"
}


export class PostDescribeOptionGroupsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDescribeOptionGroupsActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDescribeOptionGroupsVersionEnum;
}


export class PostDescribeOptionGroupsHeaders extends SpeakeasyBase {
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


export class PostDescribeOptionGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostDescribeOptionGroupsQueryParams;

  @SpeakeasyMetadata()
  headers: PostDescribeOptionGroupsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDescribeOptionGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
