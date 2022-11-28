import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetCreateQueueActionEnum {
    CreateQueue = "CreateQueue"
}

export enum GetCreateQueueVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}


export class GetCreateQueueQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateQueueActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Attribute" })
  attribute?: Map<string, string>;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=QueueName" })
  queueName: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Tag" })
  tag?: Map<string, string>;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateQueueVersionEnum;
}


export class GetCreateQueueHeaders extends SpeakeasyBase {
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


export class GetCreateQueueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCreateQueueQueryParams;

  @SpeakeasyMetadata()
  headers: GetCreateQueueHeaders;
}


export class GetCreateQueueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
