import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolMqttClientSetWillretainPathParams extends SpeakeasyBase {
    agentNum: number;
    retain: string;
}
export declare class ProtocolMqttClientSetWillretainRequest extends SpeakeasyBase {
    pathParams: ProtocolMqttClientSetWillretainPathParams;
}
export declare class ProtocolMqttClientSetWillretainResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolMqttClientSetWillretain200ApplicationJsonInt32Integers?: number[];
}
