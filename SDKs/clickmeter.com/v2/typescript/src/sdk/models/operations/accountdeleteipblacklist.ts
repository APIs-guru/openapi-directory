import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AccountDeleteIpBlacklistPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=blacklistId" })
  blacklistId: string;
}


export class AccountDeleteIpBlacklistRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AccountDeleteIpBlacklistPathParams;
}


export class AccountDeleteIpBlacklistResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreDtoAccountingIpBlacklistEntry?: shared.ApiCoreDtoAccountingIpBlacklistEntry;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
