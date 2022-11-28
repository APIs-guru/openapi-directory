import { SpeakeasyBase } from "../../../internal/utils";
export declare const ConfirmPaymentOfTransaction4ServerList: readonly ["http://api.climatekuul.com:8000/footprint"];
export declare class ConfirmPaymentOfTransaction4RequestBody extends SpeakeasyBase {
    confirmTransaction: string;
    transactionId: string;
}
export declare class ConfirmPaymentOfTransaction4Request extends SpeakeasyBase {
    serverUrl?: string;
    request?: ConfirmPaymentOfTransaction4RequestBody;
}
export declare class ConfirmPaymentOfTransaction4Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
