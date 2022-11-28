import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddBankTransferBatchPaymentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=batchUuid" })
  batchUuid: string;
}

export enum AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2PayeeTypeEnum {
    AccountDetails = "ACCOUNT_DETAILS"
}


export class AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=destAccountHolderName" })
  destAccountHolderName?: string;

  @SpeakeasyMetadata({ data: "json, name=destAccountNumber" })
  destAccountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=destIban" })
  destIban?: string;

  @SpeakeasyMetadata({ data: "json, name=destNsc" })
  destNsc?: string;

  @SpeakeasyMetadata({ data: "json, name=icanFrom" })
  icanFrom?: number;

  @SpeakeasyMetadata({ data: "json, name=myRef" })
  myRef?: string;

  @SpeakeasyMetadata({ data: "json, name=payeeType" })
  payeeType?: AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2PayeeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=yourRef" })
  yourRef?: string;
}

export enum AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1PayeeTypeEnum {
    PayeeId = "PAYEE_ID"
}


export class AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=icanFrom" })
  icanFrom?: number;

  @SpeakeasyMetadata({ data: "json, name=myRef" })
  myRef?: string;

  @SpeakeasyMetadata({ data: "json, name=payeeId" })
  payeeId?: number;

  @SpeakeasyMetadata({ data: "json, name=payeeType" })
  payeeType?: AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1PayeeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=yourRef" })
  yourRef?: string;
}


export class AddBankTransferBatchPaymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddBankTransferBatchPaymentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class AddBankTransferBatchPaymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  onebatches1Percent7BbatchUuidPercent7D1internaltransfersPostResponses200ContentApplication1jsonSchema?: shared.Onebatches1Percent7BbatchUuidPercent7D1internaltransfersPostResponses200ContentApplication1jsonSchema;
}
