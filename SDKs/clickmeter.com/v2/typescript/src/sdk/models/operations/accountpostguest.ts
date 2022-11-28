import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AccountPostGuestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=guestId" })
  guestId: number;
}


export class AccountPostGuestRequests extends SpeakeasyBase {
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


export class AccountPostGuestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AccountPostGuestPathParams;

  @SpeakeasyMetadata()
  request: AccountPostGuestRequests;
}


export class AccountPostGuestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreDtoAccountingGuest?: shared.ApiCoreDtoAccountingGuest;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
