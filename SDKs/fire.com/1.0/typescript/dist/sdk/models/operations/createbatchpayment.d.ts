import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CreateBatchPaymentNewBatchTypeEnum {
    BankTransfer = "BANK_TRANSFER",
    InternalTransfer = "INTERNAL_TRANSFER"
}
export declare class CreateBatchPaymentNewBatch extends SpeakeasyBase {
    batchName?: string;
    callBackUrl?: string;
    currency?: string;
    jobNumber?: string;
    type?: CreateBatchPaymentNewBatchTypeEnum;
}
export declare class CreateBatchPaymentNewBatchResponse extends SpeakeasyBase {
    batchUuid?: string;
}
export declare class CreateBatchPaymentRequest extends SpeakeasyBase {
    request: CreateBatchPaymentNewBatch;
}
export declare class CreateBatchPaymentResponse extends SpeakeasyBase {
    contentType: string;
    newBatchResponse?: CreateBatchPaymentNewBatchResponse;
    statusCode: number;
}
