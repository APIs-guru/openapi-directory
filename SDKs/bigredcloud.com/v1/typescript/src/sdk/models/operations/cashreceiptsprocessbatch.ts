import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CashReceiptsProcessBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json", elemType: shared.BatchItemCashReceiptDto })
  request: shared.BatchItemCashReceiptDto[];
}


export class CashReceiptsProcessBatchResponse extends SpeakeasyBase {
  @Metadata()
  cashReceiptsProcessBatch200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
