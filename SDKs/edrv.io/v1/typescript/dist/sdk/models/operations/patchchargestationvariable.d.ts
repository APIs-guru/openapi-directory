import { SpeakeasyBase } from "../../../internal/utils";
export declare class PatchChargeStationVariablePathParams extends SpeakeasyBase {
    id: string;
}
export declare enum PatchChargeStationVariableRequestBodyVariableEnum {
    MeterValueSampleInterval = "MeterValueSampleInterval",
    HeartbeatInterval = "HeartbeatInterval",
    ConnectionTimeOut = "ConnectionTimeOut",
    WebSocketPingInterval = "WebSocketPingInterval",
    TransactionMessageRetryInterval = "TransactionMessageRetryInterval",
    TransactionMessageAttempts = "TransactionMessageAttempts"
}
export declare class PatchChargeStationVariableRequestBody extends SpeakeasyBase {
    value?: string;
    variable?: PatchChargeStationVariableRequestBodyVariableEnum;
}
export declare class PatchChargeStationVariable201ApplicationJson extends SpeakeasyBase {
    message?: string;
    ok?: boolean;
    result?: Map<string, any>;
}
export declare class PatchChargeStationVariableRequest extends SpeakeasyBase {
    pathParams: PatchChargeStationVariablePathParams;
    request: PatchChargeStationVariableRequestBody;
}
export declare class PatchChargeStationVariableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    patchChargeStationVariable201ApplicationJsonObject?: PatchChargeStationVariable201ApplicationJson;
}
