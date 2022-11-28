import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AccountDeleteIpBlacklistPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=blacklistId" })
  blacklistId: string;
}


export class AccountDeleteIpBlacklistRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AccountDeleteIpBlacklistPathParams;
}


export class AccountDeleteIpBlacklistResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreDtoAccountingIpBlacklistEntry?: shared.ApiCoreDtoAccountingIpBlacklistEntry;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
