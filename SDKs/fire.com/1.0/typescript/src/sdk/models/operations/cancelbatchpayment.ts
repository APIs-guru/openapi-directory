import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CancelBatchPaymentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=batchUuid" })
  batchUuid: string;
}


export class CancelBatchPaymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CancelBatchPaymentPathParams;
}


export class CancelBatchPaymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
