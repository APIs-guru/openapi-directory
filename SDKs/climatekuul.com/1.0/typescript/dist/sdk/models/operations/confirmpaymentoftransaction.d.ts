import { SpeakeasyBase } from "../../../internal/utils";
export declare const ConfirmPaymentOfTransactionServerList: readonly ["http://api.climatekuul.com:8000/footprint"];
export declare class ConfirmPaymentOfTransactionRequestBody extends SpeakeasyBase {
    confirmTransaction: string;
    transactionId: string;
}
export declare class ConfirmPaymentOfTransactionRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: ConfirmPaymentOfTransactionRequestBody;
}
export declare class ConfirmPaymentOfTransactionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
