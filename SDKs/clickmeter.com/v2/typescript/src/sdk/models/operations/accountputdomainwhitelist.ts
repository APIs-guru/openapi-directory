import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AccountPutDomainWhitelistRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  apiCoreDtoAccountingDomainWhitelistEntry?: shared.ApiCoreDtoAccountingDomainWhitelistEntry;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  apiCoreDtoAccountingDomainWhitelistEntry1?: shared.ApiCoreDtoAccountingDomainWhitelistEntry;

  @Metadata({ data: "request, media_type=text/json" })
  apiCoreDtoAccountingDomainWhitelistEntry2?: shared.ApiCoreDtoAccountingDomainWhitelistEntry;

  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class AccountPutDomainWhitelistRequest extends SpeakeasyBase {
  @Metadata()
  request: AccountPutDomainWhitelistRequests;
}


export class AccountPutDomainWhitelistResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreDtoAccountingDomainWhitelistEntry?: shared.ApiCoreDtoAccountingDomainWhitelistEntry;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
