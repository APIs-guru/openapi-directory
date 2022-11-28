import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolMqttClientSetClientidPathParams extends SpeakeasyBase {
    agentNum: number;
    clientId: string;
}
export declare class ProtocolMqttClientSetClientidRequest extends SpeakeasyBase {
    pathParams: ProtocolMqttClientSetClientidPathParams;
}
export declare class ProtocolMqttClientSetClientidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolMqttClientSetClientid200ApplicationJsonInt32Integers?: number[];
}
