import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostListTagsForResourceActionEnum {
    ListTagsForResource = "ListTagsForResource"
}

export enum PostListTagsForResourceVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}


export class PostListTagsForResourceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostListTagsForResourceActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostListTagsForResourceVersionEnum;
}


export class PostListTagsForResourceHeaders extends SpeakeasyBase {
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


export class PostListTagsForResourceRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostListTagsForResourceQueryParams;

  @Metadata()
  headers: PostListTagsForResourceHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostListTagsForResourceResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
