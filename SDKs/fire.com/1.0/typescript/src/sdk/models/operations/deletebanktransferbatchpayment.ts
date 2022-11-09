import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteBankTransferBatchPaymentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=batchUuid" })
  batchUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemUuid" })
  itemUuid: string;
}


export class DeleteBankTransferBatchPaymentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteBankTransferBatchPaymentPathParams;
}


export class DeleteBankTransferBatchPaymentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
