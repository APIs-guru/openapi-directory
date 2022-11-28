import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteInternalTransferBatchPaymentPathParams extends SpeakeasyBase {
    batchUuid: string;
    itemUuid: string;
}
export declare class DeleteInternalTransferBatchPaymentRequest extends SpeakeasyBase {
    pathParams: DeleteInternalTransferBatchPaymentPathParams;
}
export declare class DeleteInternalTransferBatchPaymentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
