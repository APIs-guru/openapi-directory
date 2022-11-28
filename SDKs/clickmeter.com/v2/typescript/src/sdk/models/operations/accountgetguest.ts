import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AccountGetGuestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=guestId" })
  guestId: number;
}


export class AccountGetGuestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AccountGetGuestPathParams;
}


export class AccountGetGuestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreDtoAccountingGuest?: shared.ApiCoreDtoAccountingGuest;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
