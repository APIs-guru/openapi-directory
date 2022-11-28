import { SpeakeasyBase } from "../../../internal/utils";
export declare const ConfirmsPlanting5ServerList: readonly ["http://api.climatekuul.com:8000/footprint"];
export declare class ConfirmsPlanting5RequestBody extends SpeakeasyBase {
    apiKeyL1: string;
    apiKeyL2: string;
    confirmPlanting: string;
    transactionId: string;
}
export declare class ConfirmsPlanting5Request extends SpeakeasyBase {
    serverUrl?: string;
    request?: ConfirmsPlanting5RequestBody;
}
export declare class ConfirmsPlanting5Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
