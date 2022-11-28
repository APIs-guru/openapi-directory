import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TaxApiUpdateHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class TaxApiUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  taxUpdateApiModel?: shared.TaxUpdateApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  taxUpdateApiModel1?: shared.TaxUpdateApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  taxUpdateApiModel2?: shared.TaxUpdateApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class TaxApiUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: TaxApiUpdateHeaders;

  @SpeakeasyMetadata()
  request: TaxApiUpdateRequests;
}


export class TaxApiUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
