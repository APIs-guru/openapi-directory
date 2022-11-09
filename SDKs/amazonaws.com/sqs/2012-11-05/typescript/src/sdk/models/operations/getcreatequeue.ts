import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetCreateQueueActionEnum {
    CreateQueue = "CreateQueue"
}

export enum GetCreateQueueVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}


export class GetCreateQueueQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetCreateQueueActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Attribute" })
  attribute?: Map<string, string>;

  @Metadata({ data: "queryParam, style=form;explode=true;name=QueueName" })
  queueName: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Tag" })
  tag?: Map<string, string>;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetCreateQueueVersionEnum;
}


export class GetCreateQueueHeaders extends SpeakeasyBase {
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


export class GetCreateQueueRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCreateQueueQueryParams;

  @Metadata()
  headers: GetCreateQueueHeaders;
}


export class GetCreateQueueResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
