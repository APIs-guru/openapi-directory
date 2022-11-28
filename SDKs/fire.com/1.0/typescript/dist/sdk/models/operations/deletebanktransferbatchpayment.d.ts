import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteBankTransferBatchPaymentPathParams extends SpeakeasyBase {
    batchUuid: string;
    itemUuid: string;
}
export declare class DeleteBankTransferBatchPaymentRequest extends SpeakeasyBase {
    pathParams: DeleteBankTransferBatchPaymentPathParams;
}
export declare class DeleteBankTransferBatchPaymentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
