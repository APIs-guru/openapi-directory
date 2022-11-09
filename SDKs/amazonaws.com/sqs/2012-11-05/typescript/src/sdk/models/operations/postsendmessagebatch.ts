import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostSendMessageBatchActionEnum {
    SendMessageBatch = "SendMessageBatch"
}

export enum PostSendMessageBatchVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}


export class PostSendMessageBatchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostSendMessageBatchActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostSendMessageBatchVersionEnum;
}


export class PostSendMessageBatchHeaders extends SpeakeasyBase {
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


export class PostSendMessageBatchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostSendMessageBatchQueryParams;

  @Metadata()
  headers: PostSendMessageBatchHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostSendMessageBatchResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
