import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AccountDeleteDomainWhitelistPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=whitelistId" })
  whitelistId: string;
}


export class AccountDeleteDomainWhitelistRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AccountDeleteDomainWhitelistPathParams;
}


export class AccountDeleteDomainWhitelistResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreDtoAccountingDomainWhitelistEntry?: shared.ApiCoreDtoAccountingDomainWhitelistEntry;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
