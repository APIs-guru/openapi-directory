import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AccountGetGuestPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=guestId" })
  guestId: number;
}


export class AccountGetGuestRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AccountGetGuestPathParams;
}


export class AccountGetGuestResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreDtoAccountingGuest?: shared.ApiCoreDtoAccountingGuest;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
