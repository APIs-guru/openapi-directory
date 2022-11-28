import { SpeakeasyBase } from "../../../internal/utils";
export declare const ConfirmPayment5ServerList: readonly ["http://api.climatekuul.com:8000/footprint"];
export declare class ConfirmPayment5RequestBody extends SpeakeasyBase {
    apiKeyL1: string;
    apiKeyL2: string;
    confirmPayment: string;
    paymentId: number;
    transactionId: string;
}
export declare class ConfirmPayment5Request extends SpeakeasyBase {
    serverUrl?: string;
    request?: ConfirmPayment5RequestBody;
}
export declare class ConfirmPayment5Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
