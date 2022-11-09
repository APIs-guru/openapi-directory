import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SalesCreditNotesPutPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SalesCreditNotesPutRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SalesCreditNotesPutPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SalesInvoiceCreditNoteDto;
}


export class SalesCreditNotesPutResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  salesCreditNotesPut200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
