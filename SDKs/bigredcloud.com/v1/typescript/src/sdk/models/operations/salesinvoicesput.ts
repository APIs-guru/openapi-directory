import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SalesInvoicesPutPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SalesInvoicesPutRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SalesInvoicesPutPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SalesInvoiceCreditNoteDto;
}


export class SalesInvoicesPutResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  salesInvoicesPut200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
