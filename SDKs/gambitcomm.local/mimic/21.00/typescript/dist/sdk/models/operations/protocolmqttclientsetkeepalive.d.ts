import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolMqttClientSetKeepalivePathParams extends SpeakeasyBase {
    agentNum: number;
    aliveTime: number;
}
export declare class ProtocolMqttClientSetKeepaliveRequest extends SpeakeasyBase {
    pathParams: ProtocolMqttClientSetKeepalivePathParams;
}
export declare class ProtocolMqttClientSetKeepaliveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolMqttClientSetKeepalive200ApplicationJsonInt32Integers?: number[];
}
