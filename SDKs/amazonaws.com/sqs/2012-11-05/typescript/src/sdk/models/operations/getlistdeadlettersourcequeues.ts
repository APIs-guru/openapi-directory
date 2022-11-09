import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetListDeadLetterSourceQueuesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountNumber" })
  accountNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=QueueName" })
  queueName: string;
}

export enum GetListDeadLetterSourceQueuesActionEnum {
    ListDeadLetterSourceQueues = "ListDeadLetterSourceQueues"
}

export enum GetListDeadLetterSourceQueuesVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}


export class GetListDeadLetterSourceQueuesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetListDeadLetterSourceQueuesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetListDeadLetterSourceQueuesVersionEnum;
}


export class GetListDeadLetterSourceQueuesHeaders extends SpeakeasyBase {
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


export class GetListDeadLetterSourceQueuesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetListDeadLetterSourceQueuesPathParams;

  @Metadata()
  queryParams: GetListDeadLetterSourceQueuesQueryParams;

  @Metadata()
  headers: GetListDeadLetterSourceQueuesHeaders;
}


export class GetListDeadLetterSourceQueuesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
