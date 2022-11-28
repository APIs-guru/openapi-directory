import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AccountPutGuestRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  apiCoreDtoAccountingGuest?: shared.ApiCoreDtoAccountingGuest;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  apiCoreDtoAccountingGuest1?: shared.ApiCoreDtoAccountingGuest;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  apiCoreDtoAccountingGuest2?: shared.ApiCoreDtoAccountingGuest;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class AccountPutGuestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: AccountPutGuestRequests;
}


export class AccountPutGuestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreDtoAccountingGuest?: shared.ApiCoreDtoAccountingGuest;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
