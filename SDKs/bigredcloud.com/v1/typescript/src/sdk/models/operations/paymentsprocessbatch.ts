import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PaymentsProcessBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.BatchItemPaymentDto })
  request: shared.BatchItemPaymentDto[];
}


export class PaymentsProcessBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paymentsProcessBatch200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
