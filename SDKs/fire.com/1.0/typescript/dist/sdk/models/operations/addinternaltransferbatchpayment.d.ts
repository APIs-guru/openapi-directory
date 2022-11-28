import { SpeakeasyBase } from "../../../internal/utils";
export declare class AddInternalTransferBatchPaymentPathParams extends SpeakeasyBase {
    batchUuid: string;
}
export declare class AddInternalTransferBatchPaymentBatchItemInternalTransfer extends SpeakeasyBase {
    amount?: number;
    icanFrom?: number;
    icanTo?: number;
    ref?: string;
}
export declare class AddInternalTransferBatchPaymentNewBatchItemResponse extends SpeakeasyBase {
    batchItemUuid?: string;
}
export declare class AddInternalTransferBatchPaymentRequest extends SpeakeasyBase {
    pathParams: AddInternalTransferBatchPaymentPathParams;
    request: AddInternalTransferBatchPaymentBatchItemInternalTransfer;
}
export declare class AddInternalTransferBatchPaymentResponse extends SpeakeasyBase {
    contentType: string;
    newBatchItemResponse?: AddInternalTransferBatchPaymentNewBatchItemResponse;
    statusCode: number;
}
