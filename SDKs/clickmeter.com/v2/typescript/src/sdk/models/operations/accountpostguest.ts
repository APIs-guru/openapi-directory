import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AccountPostGuestPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=guestId" })
  guestId: number;
}


export class AccountPostGuestRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  apiCoreDtoAccountingGuest?: shared.ApiCoreDtoAccountingGuest;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  apiCoreDtoAccountingGuest1?: shared.ApiCoreDtoAccountingGuest;

  @Metadata({ data: "request, media_type=text/json" })
  apiCoreDtoAccountingGuest2?: shared.ApiCoreDtoAccountingGuest;

  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class AccountPostGuestRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AccountPostGuestPathParams;

  @Metadata()
  request: AccountPostGuestRequests;
}


export class AccountPostGuestResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreDtoAccountingGuest?: shared.ApiCoreDtoAccountingGuest;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
