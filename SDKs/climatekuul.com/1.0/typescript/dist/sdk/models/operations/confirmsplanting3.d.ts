import { SpeakeasyBase } from "../../../internal/utils";
export declare const ConfirmsPlanting3ServerList: readonly ["http://api.climatekuul.com:8000/footprint"];
export declare class ConfirmsPlanting3RequestBody extends SpeakeasyBase {
    apiKeyL1: string;
    apiKeyL2: string;
    confirmPlanting: string;
    transactionId: string;
}
export declare class ConfirmsPlanting3Request extends SpeakeasyBase {
    serverUrl?: string;
    request?: ConfirmsPlanting3RequestBody;
}
export declare class ConfirmsPlanting3Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
