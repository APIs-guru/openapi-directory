import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostDescribeDataSharesForProducerActionEnum {
    DescribeDataSharesForProducer = "DescribeDataSharesForProducer"
}

export enum PostDescribeDataSharesForProducerVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class PostDescribeDataSharesForProducerQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDescribeDataSharesForProducerActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDescribeDataSharesForProducerVersionEnum;
}


export class PostDescribeDataSharesForProducerHeaders extends SpeakeasyBase {
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


export class PostDescribeDataSharesForProducerRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostDescribeDataSharesForProducerQueryParams;

  @Metadata()
  headers: PostDescribeDataSharesForProducerHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDescribeDataSharesForProducerResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
