import { SpeakeasyBase } from "../../../internal/utils";
export declare const ConfirmPayment3ServerList: readonly ["http://api.climatekuul.com:8000/footprint"];
export declare class ConfirmPayment3RequestBody extends SpeakeasyBase {
    apiKeyL1: string;
    apiKeyL2: string;
    confirmPayment: string;
    paymentId: number;
    transactionId: string;
}
export declare class ConfirmPayment3Request extends SpeakeasyBase {
    serverUrl?: string;
    request?: ConfirmPayment3RequestBody;
}
export declare class ConfirmPayment3Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
