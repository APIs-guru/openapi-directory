import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AccountPutIpBlacklistRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  apiCoreDtoAccountingIpBlacklistEntry?: shared.ApiCoreDtoAccountingIpBlacklistEntry;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  apiCoreDtoAccountingIpBlacklistEntry1?: shared.ApiCoreDtoAccountingIpBlacklistEntry;

  @Metadata({ data: "request, media_type=text/json" })
  apiCoreDtoAccountingIpBlacklistEntry2?: shared.ApiCoreDtoAccountingIpBlacklistEntry;

  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class AccountPutIpBlacklistRequest extends SpeakeasyBase {
  @Metadata()
  request: AccountPutIpBlacklistRequests;
}


export class AccountPutIpBlacklistResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreDtoAccountingIpBlacklistEntry?: shared.ApiCoreDtoAccountingIpBlacklistEntry;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
