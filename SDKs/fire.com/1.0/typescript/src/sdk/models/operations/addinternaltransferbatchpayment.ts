import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AddInternalTransferBatchPaymentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=batchUuid" })
  batchUuid: string;
}


export class AddInternalTransferBatchPaymentBatchItemInternalTransfer extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=icanFrom" })
  icanFrom?: number;

  @Metadata({ data: "json, name=icanTo" })
  icanTo?: number;

  @Metadata({ data: "json, name=ref" })
  ref?: string;
}


export class AddInternalTransferBatchPaymentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddInternalTransferBatchPaymentPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: AddInternalTransferBatchPaymentBatchItemInternalTransfer;
}


export class AddInternalTransferBatchPaymentNewBatchItemResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchItemUuid" })
  batchItemUuid?: string;
}


export class AddInternalTransferBatchPaymentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  newBatchItemResponse?: AddInternalTransferBatchPaymentNewBatchItemResponse;

  @Metadata()
  statusCode: number;
}
