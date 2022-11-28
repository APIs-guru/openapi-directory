import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteBankTransferBatchPaymentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=batchUuid" })
  batchUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemUuid" })
  itemUuid: string;
}


export class DeleteBankTransferBatchPaymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteBankTransferBatchPaymentPathParams;
}


export class DeleteBankTransferBatchPaymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
