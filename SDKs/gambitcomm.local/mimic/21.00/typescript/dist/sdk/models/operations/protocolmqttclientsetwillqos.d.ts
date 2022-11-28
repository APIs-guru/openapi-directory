import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolMqttClientSetWillqosPathParams extends SpeakeasyBase {
    agentNum: number;
    qos: string;
}
export declare class ProtocolMqttClientSetWillqosRequest extends SpeakeasyBase {
    pathParams: ProtocolMqttClientSetWillqosPathParams;
}
export declare class ProtocolMqttClientSetWillqosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolMqttClientSetWillqos200ApplicationJsonInt32Integers?: number[];
}
