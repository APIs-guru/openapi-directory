import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostApiInvoiceUpdatecategoryHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class PostApiInvoiceUpdatecategoryRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  invoiceCategoryUpdateApiModel?: shared.InvoiceCategoryUpdateApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  invoiceCategoryUpdateApiModel1?: shared.InvoiceCategoryUpdateApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  invoiceCategoryUpdateApiModel2?: shared.InvoiceCategoryUpdateApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class PostApiInvoiceUpdatecategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostApiInvoiceUpdatecategoryHeaders;

  @SpeakeasyMetadata()
  request: PostApiInvoiceUpdatecategoryRequests;
}


export class PostApiInvoiceUpdatecategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invoiceCategoryApiModel?: shared.InvoiceCategoryApiModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
