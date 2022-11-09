import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PostGetAccessKeyInfoActionEnum {
    GetAccessKeyInfo = "GetAccessKeyInfo"
}

export enum PostGetAccessKeyInfoVersionEnum {
    TwoThousandAndEleven0615 = "2011-06-15"
}


export class PostGetAccessKeyInfoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostGetAccessKeyInfoActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostGetAccessKeyInfoVersionEnum;
}


export class PostGetAccessKeyInfoHeaders extends SpeakeasyBase {
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


export class PostGetAccessKeyInfoRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostGetAccessKeyInfoQueryParams;

  @Metadata()
  headers: PostGetAccessKeyInfoHeaders;

  @Metadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostGetAccessKeyInfoResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
