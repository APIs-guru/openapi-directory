import { SpeakeasyBase } from "../../../internal/utils";
export declare const ConfirmPayment4ServerList: readonly ["http://api.climatekuul.com:8000/footprint"];
export declare class ConfirmPayment4RequestBody extends SpeakeasyBase {
    apiKeyL1: string;
    apiKeyL2: string;
    confirmPayment: string;
    paymentId: number;
    transactionId: string;
}
export declare class ConfirmPayment4Request extends SpeakeasyBase {
    serverUrl?: string;
    request?: ConfirmPayment4RequestBody;
}
export declare class ConfirmPayment4Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
