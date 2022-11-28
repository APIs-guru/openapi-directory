import { SpeakeasyBase } from "../../../internal/utils";
export declare const ConfirmsPlanting4ServerList: readonly ["http://api.climatekuul.com:8000/footprint"];
export declare class ConfirmsPlanting4RequestBody extends SpeakeasyBase {
    apiKeyL1: string;
    apiKeyL2: string;
    confirmPlanting: string;
    transactionId: string;
}
export declare class ConfirmsPlanting4Request extends SpeakeasyBase {
    serverUrl?: string;
    request?: ConfirmsPlanting4RequestBody;
}
export declare class ConfirmsPlanting4Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
