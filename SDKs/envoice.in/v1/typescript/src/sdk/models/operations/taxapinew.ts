import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TaxApiNewHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class TaxApiNewRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  taxCreateApiModel?: shared.TaxCreateApiModel;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  taxCreateApiModel1?: shared.TaxCreateApiModel;

  @Metadata({ data: "request, media_type=text/json" })
  taxCreateApiModel2?: shared.TaxCreateApiModel;

  @Metadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class TaxApiNewRequest extends SpeakeasyBase {
  @Metadata()
  headers: TaxApiNewHeaders;

  @Metadata()
  request: TaxApiNewRequests;
}


export class TaxApiNewResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  taxApiNew200ApplicationJsonInt32Integer?: number;

  @Metadata()
  taxApiNew200TextJsonInt32Integer?: number;
}
