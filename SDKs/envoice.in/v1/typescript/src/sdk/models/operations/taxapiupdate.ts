import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TaxApiUpdateHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class TaxApiUpdateRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  taxUpdateApiModel?: shared.TaxUpdateApiModel;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  taxUpdateApiModel1?: shared.TaxUpdateApiModel;

  @Metadata({ data: "request, media_type=text/json" })
  taxUpdateApiModel2?: shared.TaxUpdateApiModel;

  @Metadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class TaxApiUpdateRequest extends SpeakeasyBase {
  @Metadata()
  headers: TaxApiUpdateHeaders;

  @Metadata()
  request: TaxApiUpdateRequests;
}


export class TaxApiUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
