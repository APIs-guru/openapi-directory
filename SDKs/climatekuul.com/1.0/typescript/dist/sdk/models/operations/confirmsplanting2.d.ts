import { SpeakeasyBase } from "../../../internal/utils";
export declare const ConfirmsPlanting2ServerList: readonly ["http://api.climatekuul.com:8000/footprint"];
export declare class ConfirmsPlanting2RequestBody extends SpeakeasyBase {
    apiKeyL1: string;
    apiKeyL2: string;
    confirmPlanting: string;
    transactionId: string;
}
export declare class ConfirmsPlanting2Request extends SpeakeasyBase {
    serverUrl?: string;
    request?: ConfirmsPlanting2RequestBody;
}
export declare class ConfirmsPlanting2Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
