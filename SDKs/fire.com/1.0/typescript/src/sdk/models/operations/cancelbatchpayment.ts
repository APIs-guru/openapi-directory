import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CancelBatchPaymentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=batchUuid" })
  batchUuid: string;
}


export class CancelBatchPaymentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CancelBatchPaymentPathParams;
}


export class CancelBatchPaymentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
