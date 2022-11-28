import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CashReceiptsProcessBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.BatchItemCashReceiptDto })
  request: shared.BatchItemCashReceiptDto[];
}


export class CashReceiptsProcessBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cashReceiptsProcessBatch200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
