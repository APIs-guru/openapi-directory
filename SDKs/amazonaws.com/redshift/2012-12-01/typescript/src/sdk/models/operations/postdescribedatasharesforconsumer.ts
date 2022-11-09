import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostDescribeDataSharesForConsumerActionEnum {
    DescribeDataSharesForConsumer = "DescribeDataSharesForConsumer"
}

export enum PostDescribeDataSharesForConsumerVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class PostDescribeDataSharesForConsumerQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDescribeDataSharesForConsumerActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDescribeDataSharesForConsumerVersionEnum;
}


export class PostDescribeDataSharesForConsumerHeaders extends SpeakeasyBase {
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


export class PostDescribeDataSharesForConsumerRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostDescribeDataSharesForConsumerQueryParams;

  @Metadata()
  headers: PostDescribeDataSharesForConsumerHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDescribeDataSharesForConsumerResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
