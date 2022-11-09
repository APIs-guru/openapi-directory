import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostApiInvoiceNewcategoryHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class PostApiInvoiceNewcategoryRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  invoiceCategoryCreateApiModel?: shared.InvoiceCategoryCreateApiModel;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  invoiceCategoryCreateApiModel1?: shared.InvoiceCategoryCreateApiModel;

  @Metadata({ data: "request, media_type=text/json" })
  invoiceCategoryCreateApiModel2?: shared.InvoiceCategoryCreateApiModel;

  @Metadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class PostApiInvoiceNewcategoryRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostApiInvoiceNewcategoryHeaders;

  @Metadata()
  request: PostApiInvoiceNewcategoryRequests;
}


export class PostApiInvoiceNewcategoryResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  invoiceCategoryApiModel?: shared.InvoiceCategoryApiModel;

  @Metadata()
  statusCode: number;
}
