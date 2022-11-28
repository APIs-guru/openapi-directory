import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TaxApiDeleteHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class TaxApiDeleteRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  taxDeleteApiModel?: shared.TaxDeleteApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  taxDeleteApiModel1?: shared.TaxDeleteApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  taxDeleteApiModel2?: shared.TaxDeleteApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class TaxApiDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: TaxApiDeleteHeaders;

  @SpeakeasyMetadata()
  request: TaxApiDeleteRequests;
}


export class TaxApiDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  taxApiDelete200ApplicationJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  taxApiDelete200TextJsonInt32Integer?: number;
}
