import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ProductApiDeleteHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class ProductApiDeleteRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  productDeleteApiModel?: shared.ProductDeleteApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  productDeleteApiModel1?: shared.ProductDeleteApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  productDeleteApiModel2?: shared.ProductDeleteApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class ProductApiDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ProductApiDeleteHeaders;

  @SpeakeasyMetadata()
  request: ProductApiDeleteRequests;
}


export class ProductApiDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  productApiDelete200ApplicationJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  productApiDelete200TextJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  statusCode: number;
}
