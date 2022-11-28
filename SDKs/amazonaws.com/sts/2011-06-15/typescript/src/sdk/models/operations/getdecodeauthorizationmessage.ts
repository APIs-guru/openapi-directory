import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetDecodeAuthorizationMessageActionEnum {
    DecodeAuthorizationMessage = "DecodeAuthorizationMessage"
}

export enum GetDecodeAuthorizationMessageVersionEnum {
    TwoThousandAndEleven0615 = "2011-06-15"
}


export class GetDecodeAuthorizationMessageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDecodeAuthorizationMessageActionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EncodedMessage" })
  encodedMessage: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDecodeAuthorizationMessageVersionEnum;
}


export class GetDecodeAuthorizationMessageHeaders extends SpeakeasyBase {
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


export class GetDecodeAuthorizationMessageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDecodeAuthorizationMessageQueryParams;

  @SpeakeasyMetadata()
  headers: GetDecodeAuthorizationMessageHeaders;
}


export class GetDecodeAuthorizationMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
