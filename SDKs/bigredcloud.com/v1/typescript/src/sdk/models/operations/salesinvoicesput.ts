import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SalesInvoicesPutPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SalesInvoicesPutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SalesInvoicesPutPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SalesInvoiceCreditNoteDto;
}


export class SalesInvoicesPutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  salesInvoicesPut200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
