import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostApiInvoiceUpdatecategoryHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-key" })
  xAuthKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-auth-secret" })
  xAuthSecret: string;
}


export class PostApiInvoiceUpdatecategoryRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  invoiceCategoryUpdateApiModel?: shared.InvoiceCategoryUpdateApiModel;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  invoiceCategoryUpdateApiModel1?: shared.InvoiceCategoryUpdateApiModel;

  @Metadata({ data: "request, media_type=text/json" })
  invoiceCategoryUpdateApiModel2?: shared.InvoiceCategoryUpdateApiModel;

  @Metadata({ data: "request, media_type=text/html" })
  textHtml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class PostApiInvoiceUpdatecategoryRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostApiInvoiceUpdatecategoryHeaders;

  @Metadata()
  request: PostApiInvoiceUpdatecategoryRequests;
}


export class PostApiInvoiceUpdatecategoryResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  invoiceCategoryApiModel?: shared.InvoiceCategoryApiModel;

  @Metadata()
  statusCode: number;
}
