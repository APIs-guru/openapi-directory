import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddBankTransferBatchPaymentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=batchUuid" })
  batchUuid: string;
}

export enum AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2PayeeTypeEnum {
    AccountDetails = "ACCOUNT_DETAILS"
}


export class AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=destAccountHolderName" })
  destAccountHolderName?: string;

  @Metadata({ data: "json, name=destAccountNumber" })
  destAccountNumber?: string;

  @Metadata({ data: "json, name=destIban" })
  destIban?: string;

  @Metadata({ data: "json, name=destNsc" })
  destNsc?: string;

  @Metadata({ data: "json, name=icanFrom" })
  icanFrom?: number;

  @Metadata({ data: "json, name=myRef" })
  myRef?: string;

  @Metadata({ data: "json, name=payeeType" })
  payeeType?: AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2PayeeTypeEnum;

  @Metadata({ data: "json, name=yourRef" })
  yourRef?: string;
}

export enum AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1PayeeTypeEnum {
    PayeeId = "PAYEE_ID"
}


export class AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=icanFrom" })
  icanFrom?: number;

  @Metadata({ data: "json, name=myRef" })
  myRef?: string;

  @Metadata({ data: "json, name=payeeId" })
  payeeId?: number;

  @Metadata({ data: "json, name=payeeType" })
  payeeType?: AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1PayeeTypeEnum;

  @Metadata({ data: "json, name=yourRef" })
  yourRef?: string;
}


export class AddBankTransferBatchPaymentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddBankTransferBatchPaymentPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class AddBankTransferBatchPaymentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  onebatches1Percent7BbatchUuidPercent7D1internaltransfersPostResponses200ContentApplication1jsonSchema?: shared.Onebatches1Percent7BbatchUuidPercent7D1internaltransfersPostResponses200ContentApplication1jsonSchema;
}
