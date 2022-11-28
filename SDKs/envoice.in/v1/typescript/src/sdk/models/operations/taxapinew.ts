import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TaxApiNewHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class TaxApiNewRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  taxCreateApiModel?: shared.TaxCreateApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  taxCreateApiModel1?: shared.TaxCreateApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  taxCreateApiModel2?: shared.TaxCreateApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class TaxApiNewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: TaxApiNewHeaders;

  @SpeakeasyMetadata()
  request: TaxApiNewRequests;
}


export class TaxApiNewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taxApiNew200ApplicationJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  taxApiNew200TextJsonInt32Integer?: number;
}
