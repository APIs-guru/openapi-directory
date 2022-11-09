import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetListQueuesActionEnum {
    ListQueues = "ListQueues"
}

export enum GetListQueuesVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}


export class GetListQueuesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetListQueuesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=QueueNamePrefix" })
  queueNamePrefix?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetListQueuesVersionEnum;
}


export class GetListQueuesHeaders extends SpeakeasyBase {
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


export class GetListQueuesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetListQueuesQueryParams;

  @Metadata()
  headers: GetListQueuesHeaders;
}


export class GetListQueuesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
