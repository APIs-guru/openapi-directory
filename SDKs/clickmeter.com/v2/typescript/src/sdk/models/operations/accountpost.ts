import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AccountPostRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  apiCoreDtoAccountingUser?: shared.ApiCoreDtoAccountingUser;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  apiCoreDtoAccountingUser1?: shared.ApiCoreDtoAccountingUser;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  apiCoreDtoAccountingUser2?: shared.ApiCoreDtoAccountingUser;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class AccountPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: AccountPostRequests;
}


export class AccountPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreDtoAccountingUser?: shared.ApiCoreDtoAccountingUser;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
