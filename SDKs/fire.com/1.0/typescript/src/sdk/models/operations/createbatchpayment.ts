import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CreateBatchPaymentNewBatchTypeEnum {
    BankTransfer = "BANK_TRANSFER"
,    InternalTransfer = "INTERNAL_TRANSFER"
}


export class CreateBatchPaymentNewBatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchName" })
  batchName?: string;

  @Metadata({ data: "json, name=callBackUrl" })
  callBackUrl?: string;

  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=jobNumber" })
  jobNumber?: string;

  @Metadata({ data: "json, name=type" })
  type?: CreateBatchPaymentNewBatchTypeEnum;
}


export class CreateBatchPaymentRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: CreateBatchPaymentNewBatch;
}


export class CreateBatchPaymentNewBatchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchUuid" })
  batchUuid?: string;
}


export class CreateBatchPaymentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  newBatchResponse?: CreateBatchPaymentNewBatchResponse;

  @Metadata()
  statusCode: number;
}
