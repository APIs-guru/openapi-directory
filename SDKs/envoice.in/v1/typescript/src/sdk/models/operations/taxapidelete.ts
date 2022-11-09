import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TaxApiDeleteHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class TaxApiDeleteRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  taxDeleteApiModel?: shared.TaxDeleteApiModel;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  taxDeleteApiModel1?: shared.TaxDeleteApiModel;

  @Metadata({ data: "request, media_type=text/json" })
  taxDeleteApiModel2?: shared.TaxDeleteApiModel;

  @Metadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class TaxApiDeleteRequest extends SpeakeasyBase {
  @Metadata()
  headers: TaxApiDeleteHeaders;

  @Metadata()
  request: TaxApiDeleteRequests;
}


export class TaxApiDeleteResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  taxApiDelete200ApplicationJsonInt32Integer?: number;

  @Metadata()
  taxApiDelete200TextJsonInt32Integer?: number;
}
