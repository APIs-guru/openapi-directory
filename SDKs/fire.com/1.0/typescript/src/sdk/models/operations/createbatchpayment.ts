import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CreateBatchPaymentNewBatchTypeEnum {
    BankTransfer = "BANK_TRANSFER",
    InternalTransfer = "INTERNAL_TRANSFER"
}


export class CreateBatchPaymentNewBatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchName" })
  batchName?: string;

  @SpeakeasyMetadata({ data: "json, name=callBackUrl" })
  callBackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=jobNumber" })
  jobNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CreateBatchPaymentNewBatchTypeEnum;
}


export class CreateBatchPaymentNewBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchUuid" })
  batchUuid?: string;
}


export class CreateBatchPaymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateBatchPaymentNewBatch;
}


export class CreateBatchPaymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  newBatchResponse?: CreateBatchPaymentNewBatchResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
