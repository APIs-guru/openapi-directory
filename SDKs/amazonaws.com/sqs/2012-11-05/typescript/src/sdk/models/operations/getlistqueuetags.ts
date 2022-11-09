import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetListQueueTagsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountNumber" })
  accountNumber: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=QueueName" })
  queueName: string;
}

export enum GetListQueueTagsActionEnum {
    ListQueueTags = "ListQueueTags"
}

export enum GetListQueueTagsVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}


export class GetListQueueTagsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetListQueueTagsActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetListQueueTagsVersionEnum;
}


export class GetListQueueTagsHeaders extends SpeakeasyBase {
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


export class GetListQueueTagsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetListQueueTagsPathParams;

  @Metadata()
  queryParams: GetListQueueTagsQueryParams;

  @Metadata()
  headers: GetListQueueTagsHeaders;
}


export class GetListQueueTagsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
