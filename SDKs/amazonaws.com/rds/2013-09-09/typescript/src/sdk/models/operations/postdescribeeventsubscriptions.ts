import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostDescribeEventSubscriptionsActionEnum {
    DescribeEventSubscriptions = "DescribeEventSubscriptions"
}

export enum PostDescribeEventSubscriptionsVersionEnum {
    TwoThousandAndThirteen0909 = "2013-09-09"
}


export class PostDescribeEventSubscriptionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDescribeEventSubscriptionsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDescribeEventSubscriptionsVersionEnum;
}


export class PostDescribeEventSubscriptionsHeaders extends SpeakeasyBase {
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


export class PostDescribeEventSubscriptionsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostDescribeEventSubscriptionsQueryParams;

  @Metadata()
  headers: PostDescribeEventSubscriptionsHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDescribeEventSubscriptionsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
