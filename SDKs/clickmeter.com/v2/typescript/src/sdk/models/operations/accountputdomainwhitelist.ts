import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AccountPutDomainWhitelistRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  apiCoreDtoAccountingDomainWhitelistEntry?: shared.ApiCoreDtoAccountingDomainWhitelistEntry;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  apiCoreDtoAccountingDomainWhitelistEntry1?: shared.ApiCoreDtoAccountingDomainWhitelistEntry;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  apiCoreDtoAccountingDomainWhitelistEntry2?: shared.ApiCoreDtoAccountingDomainWhitelistEntry;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class AccountPutDomainWhitelistRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: AccountPutDomainWhitelistRequests;
}


export class AccountPutDomainWhitelistResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreDtoAccountingDomainWhitelistEntry?: shared.ApiCoreDtoAccountingDomainWhitelistEntry;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
