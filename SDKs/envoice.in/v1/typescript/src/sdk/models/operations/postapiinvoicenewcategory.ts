import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostApiInvoiceNewcategoryHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class PostApiInvoiceNewcategoryRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  invoiceCategoryCreateApiModel?: shared.InvoiceCategoryCreateApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  invoiceCategoryCreateApiModel1?: shared.InvoiceCategoryCreateApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  invoiceCategoryCreateApiModel2?: shared.InvoiceCategoryCreateApiModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class PostApiInvoiceNewcategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostApiInvoiceNewcategoryHeaders;

  @SpeakeasyMetadata()
  request: PostApiInvoiceNewcategoryRequests;
}


export class PostApiInvoiceNewcategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invoiceCategoryApiModel?: shared.InvoiceCategoryApiModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
