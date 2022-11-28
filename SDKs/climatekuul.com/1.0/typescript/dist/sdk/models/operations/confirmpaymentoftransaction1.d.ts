import { SpeakeasyBase } from "../../../internal/utils";
export declare const ConfirmPaymentOfTransaction1ServerList: readonly ["http://api.climatekuul.com:8000/footprint"];
export declare class ConfirmPaymentOfTransaction1RequestBody extends SpeakeasyBase {
    confirmTransaction: string;
    transactionId: string;
}
export declare class ConfirmPaymentOfTransaction1Request extends SpeakeasyBase {
    serverUrl?: string;
    request?: ConfirmPaymentOfTransaction1RequestBody;
}
export declare class ConfirmPaymentOfTransaction1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
