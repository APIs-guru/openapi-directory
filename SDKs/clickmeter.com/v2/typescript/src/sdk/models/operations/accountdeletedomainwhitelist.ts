import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AccountDeleteDomainWhitelistPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=whitelistId" })
  whitelistId: string;
}


export class AccountDeleteDomainWhitelistRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AccountDeleteDomainWhitelistPathParams;
}


export class AccountDeleteDomainWhitelistResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreDtoAccountingDomainWhitelistEntry?: shared.ApiCoreDtoAccountingDomainWhitelistEntry;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
