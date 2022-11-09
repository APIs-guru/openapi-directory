import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostGetQueueAttributesActionEnum {
    GetQueueAttributes = "GetQueueAttributes"
}

export enum PostGetQueueAttributesVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}


export class PostGetQueueAttributesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostGetQueueAttributesActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostGetQueueAttributesVersionEnum;
}


export class PostGetQueueAttributesHeaders extends SpeakeasyBase {
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


export class PostGetQueueAttributesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostGetQueueAttributesQueryParams;

  @Metadata()
  headers: PostGetQueueAttributesHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostGetQueueAttributesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
