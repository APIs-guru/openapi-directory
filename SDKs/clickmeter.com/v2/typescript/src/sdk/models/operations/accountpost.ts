import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AccountPostRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  apiCoreDtoAccountingUser?: shared.ApiCoreDtoAccountingUser;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  apiCoreDtoAccountingUser1?: shared.ApiCoreDtoAccountingUser;

  @Metadata({ data: "request, media_type=text/json" })
  apiCoreDtoAccountingUser2?: shared.ApiCoreDtoAccountingUser;

  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class AccountPostRequest extends SpeakeasyBase {
  @Metadata()
  request: AccountPostRequests;
}


export class AccountPostResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreDtoAccountingUser?: shared.ApiCoreDtoAccountingUser;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
