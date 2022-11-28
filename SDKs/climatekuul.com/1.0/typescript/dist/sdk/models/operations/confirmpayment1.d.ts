import { SpeakeasyBase } from "../../../internal/utils";
export declare const ConfirmPayment1ServerList: readonly ["http://api.climatekuul.com:8000/footprint"];
export declare class ConfirmPayment1RequestBody extends SpeakeasyBase {
    apiKeyL1: string;
    apiKeyL2: string;
    confirmPayment: string;
    paymentId: number;
    transactionId: string;
}
export declare class ConfirmPayment1Request extends SpeakeasyBase {
    serverUrl?: string;
    request?: ConfirmPayment1RequestBody;
}
export declare class ConfirmPayment1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
