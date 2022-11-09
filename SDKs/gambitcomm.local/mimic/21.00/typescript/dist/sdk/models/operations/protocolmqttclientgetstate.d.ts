import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolMqttClientGetStatePathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolMqttClientGetStateRequest extends SpeakeasyBase {
    pathParams: ProtocolMqttClientGetStatePathParams;
}
export declare class ProtocolMqttClientGetStateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolMqttClientGetState200ApplicationJsonInt32Integers?: number[];
}
