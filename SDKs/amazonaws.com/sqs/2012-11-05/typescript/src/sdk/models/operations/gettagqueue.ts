import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTagQueuePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountNumber" })
  accountNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=QueueName" })
  queueName: string;
}

export enum GetTagQueueActionEnum {
    TagQueue = "TagQueue"
}

export enum GetTagQueueVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}


export class GetTagQueueQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetTagQueueActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Tags" })
  tags: Map<string, string>;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetTagQueueVersionEnum;
}


export class GetTagQueueHeaders extends SpeakeasyBase {
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


export class GetTagQueueRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTagQueuePathParams;

  @Metadata()
  queryParams: GetTagQueueQueryParams;

  @Metadata()
  headers: GetTagQueueHeaders;
}


export class GetTagQueueResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
