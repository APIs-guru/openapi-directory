import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteInternalTransferBatchPaymentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=batchUuid" })
  batchUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemUuid" })
  itemUuid: string;
}


export class DeleteInternalTransferBatchPaymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteInternalTransferBatchPaymentPathParams;
}


export class DeleteInternalTransferBatchPaymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
