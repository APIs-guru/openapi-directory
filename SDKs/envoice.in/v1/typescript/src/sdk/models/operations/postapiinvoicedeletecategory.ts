import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostApiInvoiceDeletecategoryHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class PostApiInvoiceDeletecategoryRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  invoiceCategoryDeleteApiModel?: shared.InvoiceCategoryDeleteApiModel;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  invoiceCategoryDeleteApiModel1?: shared.InvoiceCategoryDeleteApiModel;

  @Metadata({ data: "request, media_type=text/json" })
  invoiceCategoryDeleteApiModel2?: shared.InvoiceCategoryDeleteApiModel;

  @Metadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class PostApiInvoiceDeletecategoryRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostApiInvoiceDeletecategoryHeaders;

  @Metadata()
  request: PostApiInvoiceDeletecategoryRequests;
}


export class PostApiInvoiceDeletecategoryResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  postApiInvoiceDeletecategory200ApplicationJsonInt32Integer?: number;

  @Metadata()
  postApiInvoiceDeletecategory200TextJsonInt32Integer?: number;

  @Metadata()
  statusCode: number;
}
