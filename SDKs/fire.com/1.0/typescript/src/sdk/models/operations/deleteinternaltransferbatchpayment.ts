import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteInternalTransferBatchPaymentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=batchUuid" })
  batchUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemUuid" })
  itemUuid: string;
}


export class DeleteInternalTransferBatchPaymentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteInternalTransferBatchPaymentPathParams;
}


export class DeleteInternalTransferBatchPaymentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
