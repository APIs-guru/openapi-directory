import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProductApiDeleteHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class ProductApiDeleteRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  productDeleteApiModel?: shared.ProductDeleteApiModel;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  productDeleteApiModel1?: shared.ProductDeleteApiModel;

  @Metadata({ data: "request, media_type=text/json" })
  productDeleteApiModel2?: shared.ProductDeleteApiModel;

  @Metadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class ProductApiDeleteRequest extends SpeakeasyBase {
  @Metadata()
  headers: ProductApiDeleteHeaders;

  @Metadata()
  request: ProductApiDeleteRequests;
}


export class ProductApiDeleteResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  productApiDelete200ApplicationJsonInt32Integer?: number;

  @Metadata()
  productApiDelete200TextJsonInt32Integer?: number;

  @Metadata()
  statusCode: number;
}
