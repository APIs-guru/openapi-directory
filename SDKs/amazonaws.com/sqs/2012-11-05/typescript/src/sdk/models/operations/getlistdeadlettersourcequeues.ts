import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetListDeadLetterSourceQueuesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountNumber" })
  accountNumber: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=QueueName" })
  queueName: string;
}

export enum GetListDeadLetterSourceQueuesActionEnum {
    ListDeadLetterSourceQueues = "ListDeadLetterSourceQueues"
}

export enum GetListDeadLetterSourceQueuesVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}


export class GetListDeadLetterSourceQueuesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetListDeadLetterSourceQueuesActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetListDeadLetterSourceQueuesVersionEnum;
}


export class GetListDeadLetterSourceQueuesHeaders extends SpeakeasyBase {
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


export class GetListDeadLetterSourceQueuesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetListDeadLetterSourceQueuesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetListDeadLetterSourceQueuesQueryParams;

  @SpeakeasyMetadata()
  headers: GetListDeadLetterSourceQueuesHeaders;
}


export class GetListDeadLetterSourceQueuesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
