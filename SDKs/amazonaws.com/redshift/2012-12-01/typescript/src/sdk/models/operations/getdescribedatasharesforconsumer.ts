import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDescribeDataSharesForConsumerActionEnum {
    DescribeDataSharesForConsumer = "DescribeDataSharesForConsumer"
}

export enum GetDescribeDataSharesForConsumerStatusEnum {
    Active = "ACTIVE",
    Available = "AVAILABLE"
}

export enum GetDescribeDataSharesForConsumerVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}


export class GetDescribeDataSharesForConsumerQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDescribeDataSharesForConsumerActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ConsumerArn" })
  consumerArn?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxRecords" })
  maxRecords?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: GetDescribeDataSharesForConsumerStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDescribeDataSharesForConsumerVersionEnum;
}


export class GetDescribeDataSharesForConsumerHeaders extends SpeakeasyBase {
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


export class GetDescribeDataSharesForConsumerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDescribeDataSharesForConsumerQueryParams;

  @SpeakeasyMetadata()
  headers: GetDescribeDataSharesForConsumerHeaders;
}


export class GetDescribeDataSharesForConsumerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
