import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AddInternalTransferBatchPaymentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=batchUuid" })
  batchUuid: string;
}


export class AddInternalTransferBatchPaymentBatchItemInternalTransfer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=icanFrom" })
  icanFrom?: number;

  @SpeakeasyMetadata({ data: "json, name=icanTo" })
  icanTo?: number;

  @SpeakeasyMetadata({ data: "json, name=ref" })
  ref?: string;
}


export class AddInternalTransferBatchPaymentNewBatchItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchItemUuid" })
  batchItemUuid?: string;
}


export class AddInternalTransferBatchPaymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddInternalTransferBatchPaymentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AddInternalTransferBatchPaymentBatchItemInternalTransfer;
}


export class AddInternalTransferBatchPaymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  newBatchItemResponse?: AddInternalTransferBatchPaymentNewBatchItemResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
