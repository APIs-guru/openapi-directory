import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SalesInvoicesProcessBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json", elemType: shared.BatchItemSalesInvoiceCreditNoteDto })
  request: shared.BatchItemSalesInvoiceCreditNoteDto[];
}


export class SalesInvoicesProcessBatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  salesInvoicesProcessBatch200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
