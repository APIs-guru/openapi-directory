import { SpeakeasyBase } from "../../../internal/utils";
export declare const ConfirmsPlantingServerList: readonly ["http://api.climatekuul.com:8000/footprint"];
export declare class ConfirmsPlantingRequestBody extends SpeakeasyBase {
    apiKeyL1: string;
    apiKeyL2: string;
    confirmPlanting: string;
    transactionId: string;
}
export declare class ConfirmsPlantingRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: ConfirmsPlantingRequestBody;
}
export declare class ConfirmsPlantingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
