import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolMqttClientSetOnDisconnectPathParams extends SpeakeasyBase {
    action: string;
    agentNum: number;
}
export declare class ProtocolMqttClientSetOnDisconnectRequest extends SpeakeasyBase {
    pathParams: ProtocolMqttClientSetOnDisconnectPathParams;
}
export declare class ProtocolMqttClientSetOnDisconnectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolMqttClientSetOnDisconnect200ApplicationJsonInt32Integers?: number[];
}
