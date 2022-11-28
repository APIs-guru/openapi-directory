import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AccountPutIpBlacklistRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  apiCoreDtoAccountingIpBlacklistEntry?: shared.ApiCoreDtoAccountingIpBlacklistEntry;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  apiCoreDtoAccountingIpBlacklistEntry1?: shared.ApiCoreDtoAccountingIpBlacklistEntry;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  apiCoreDtoAccountingIpBlacklistEntry2?: shared.ApiCoreDtoAccountingIpBlacklistEntry;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class AccountPutIpBlacklistRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: AccountPutIpBlacklistRequests;
}


export class AccountPutIpBlacklistResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreDtoAccountingIpBlacklistEntry?: shared.ApiCoreDtoAccountingIpBlacklistEntry;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
