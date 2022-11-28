import { SpeakeasyBase } from "../../../internal/utils";
export declare const ConfirmPaymentOfTransaction3ServerList: readonly ["http://api.climatekuul.com:8000/footprint"];
export declare class ConfirmPaymentOfTransaction3RequestBody extends SpeakeasyBase {
    confirmTransaction: string;
    transactionId: string;
}
export declare class ConfirmPaymentOfTransaction3Request extends SpeakeasyBase {
    serverUrl?: string;
    request?: ConfirmPaymentOfTransaction3RequestBody;
}
export declare class ConfirmPaymentOfTransaction3Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
