import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolMqttClientGetProtstatePathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolMqttClientGetProtstateRequest extends SpeakeasyBase {
    pathParams: ProtocolMqttClientGetProtstatePathParams;
}
export declare class ProtocolMqttClientGetProtstateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolMqttClientGetProtstate200ApplicationJsonInt32Integers?: number[];
}
