import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SalesInvoicesProcessBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.BatchItemSalesInvoiceCreditNoteDto })
  request: shared.BatchItemSalesInvoiceCreditNoteDto[];
}


export class SalesInvoicesProcessBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  salesInvoicesProcessBatch200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
