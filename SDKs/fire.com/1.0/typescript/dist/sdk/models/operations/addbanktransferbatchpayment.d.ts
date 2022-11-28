import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddBankTransferBatchPaymentPathParams extends SpeakeasyBase {
    batchUuid: string;
}
export declare enum AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2PayeeTypeEnum {
    AccountDetails = "ACCOUNT_DETAILS"
}
export declare class AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2 extends SpeakeasyBase {
    amount?: number;
    destAccountHolderName?: string;
    destAccountNumber?: string;
    destIban?: string;
    destNsc?: string;
    icanFrom?: number;
    myRef?: string;
    payeeType?: AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2PayeeTypeEnum;
    yourRef?: string;
}
export declare enum AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1PayeeTypeEnum {
    PayeeId = "PAYEE_ID"
}
export declare class AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1 extends SpeakeasyBase {
    amount?: number;
    icanFrom?: number;
    myRef?: string;
    payeeId?: number;
    payeeType?: AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1PayeeTypeEnum;
    yourRef?: string;
}
export declare class AddBankTransferBatchPaymentRequest extends SpeakeasyBase {
    pathParams: AddBankTransferBatchPaymentPathParams;
    request: any;
}
export declare class AddBankTransferBatchPaymentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    onebatches1Percent7BbatchUuidPercent7D1internaltransfersPostResponses200ContentApplication1jsonSchema?: shared.Onebatches1Percent7BbatchUuidPercent7D1internaltransfersPostResponses200ContentApplication1jsonSchema;
}
