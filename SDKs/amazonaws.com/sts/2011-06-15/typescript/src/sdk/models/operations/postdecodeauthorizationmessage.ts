import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostDecodeAuthorizationMessageActionEnum {
    DecodeAuthorizationMessage = "DecodeAuthorizationMessage"
}

export enum PostDecodeAuthorizationMessageVersionEnum {
    TwoThousandAndEleven0615 = "2011-06-15"
}


export class PostDecodeAuthorizationMessageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: PostDecodeAuthorizationMessageActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: PostDecodeAuthorizationMessageVersionEnum;
}


export class PostDecodeAuthorizationMessageHeaders extends SpeakeasyBase {
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


export class PostDecodeAuthorizationMessageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostDecodeAuthorizationMessageQueryParams;

  @SpeakeasyMetadata()
  headers: PostDecodeAuthorizationMessageHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  request?: Uint8Array;
}


export class PostDecodeAuthorizationMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
