import { SpeakeasyBase } from "../../../internal/utils";
export declare const ConfirmPaymentOfTransaction5ServerList: readonly ["http://api.climatekuul.com:8000/footprint"];
export declare class ConfirmPaymentOfTransaction5RequestBody extends SpeakeasyBase {
    confirmTransaction: string;
    transactionId: string;
}
export declare class ConfirmPaymentOfTransaction5Request extends SpeakeasyBase {
    serverUrl?: string;
    request?: ConfirmPaymentOfTransaction5RequestBody;
}
export declare class ConfirmPaymentOfTransaction5Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
