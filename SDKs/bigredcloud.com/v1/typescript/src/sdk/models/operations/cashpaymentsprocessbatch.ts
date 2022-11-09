import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CashPaymentsProcessBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json", elemType: shared.BatchItemCashPaymentDto })
  request: shared.BatchItemCashPaymentDto[];
}


export class CashPaymentsProcessBatchResponse extends SpeakeasyBase {
  @Metadata()
  cashPaymentsProcessBatch200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
