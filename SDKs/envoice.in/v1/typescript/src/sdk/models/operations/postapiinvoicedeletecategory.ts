import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostApiInvoiceDeletecategoryHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class PostApiInvoiceDeletecategoryRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  invoiceCategoryDeleteApiModel?: shared.InvoiceCategoryDeleteApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  invoiceCategoryDeleteApiModel1?: shared.InvoiceCategoryDeleteApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  invoiceCategoryDeleteApiModel2?: shared.InvoiceCategoryDeleteApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class PostApiInvoiceDeletecategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostApiInvoiceDeletecategoryHeaders;

  @SpeakeasyMetadata()
  request: PostApiInvoiceDeletecategoryRequests;
}


export class PostApiInvoiceDeletecategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postApiInvoiceDeletecategory200ApplicationJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  postApiInvoiceDeletecategory200TextJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  statusCode: number;
}
