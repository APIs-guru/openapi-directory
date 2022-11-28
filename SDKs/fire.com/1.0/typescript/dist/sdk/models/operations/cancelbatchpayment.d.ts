import { SpeakeasyBase } from "../../../internal/utils";
export declare class CancelBatchPaymentPathParams extends SpeakeasyBase {
    batchUuid: string;
}
export declare class CancelBatchPaymentRequest extends SpeakeasyBase {
    pathParams: CancelBatchPaymentPathParams;
}
export declare class CancelBatchPaymentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
