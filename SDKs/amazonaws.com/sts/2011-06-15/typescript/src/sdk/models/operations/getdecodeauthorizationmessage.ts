import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetDecodeAuthorizationMessageActionEnum {
    DecodeAuthorizationMessage = "DecodeAuthorizationMessage"
}

export enum GetDecodeAuthorizationMessageVersionEnum {
    TwoThousandAndEleven0615 = "2011-06-15"
}


export class GetDecodeAuthorizationMessageQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Action" })
  action: GetDecodeAuthorizationMessageActionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EncodedMessage" })
  encodedMessage: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Version" })
  version: GetDecodeAuthorizationMessageVersionEnum;
}


export class GetDecodeAuthorizationMessageHeaders extends SpeakeasyBase {
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


export class GetDecodeAuthorizationMessageRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDecodeAuthorizationMessageQueryParams;

  @Metadata()
  headers: GetDecodeAuthorizationMessageHeaders;
}


export class GetDecodeAuthorizationMessageResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
