import { SpeakeasyBase } from "../../../internal/utils";
export declare const ConfirmPaymentServerList: readonly ["http://api.climatekuul.com:8000/footprint"];
export declare class ConfirmPaymentRequestBody extends SpeakeasyBase {
    apiKeyL1: string;
    apiKeyL2: string;
    confirmPayment: string;
    paymentId: number;
    transactionId: string;
}
export declare class ConfirmPaymentRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: ConfirmPaymentRequestBody;
}
export declare class ConfirmPaymentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
