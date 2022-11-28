import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CashPaymentsProcessBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.BatchItemCashPaymentDto })
  request: shared.BatchItemCashPaymentDto[];
}


export class CashPaymentsProcessBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cashPaymentsProcessBatch200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
