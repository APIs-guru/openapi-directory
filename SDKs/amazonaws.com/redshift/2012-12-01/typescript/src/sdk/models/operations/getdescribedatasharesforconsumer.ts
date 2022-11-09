import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDescribeDataSharesForConsumerActionEnum {
    DescribeDataSharesForConsumer = "DescribeDataSharesForConsumer"
}

export enum GetDescribeDataSharesForConsumerStatusEnum {
    Active = "ACTIVE"
,    Available = "AVAILABLE"
}

export enum GetDescribeDataSharesForConsumerVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetDescribeDataSharesForConsumerQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeDataSharesForConsumerActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ConsumerArn" })
  consumerArn?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: GetDescribeDataSharesForConsumerStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeDataSharesForConsumerVersionEnum;
}


export class GetDescribeDataSharesForConsumerHeaders extends SpeakeasyBase {
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


export class GetDescribeDataSharesForConsumerRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDescribeDataSharesForConsumerQueryParams;

  @Metadata()
  headers: GetDescribeDataSharesForConsumerHeaders;
}


export class GetDescribeDataSharesForConsumerResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
