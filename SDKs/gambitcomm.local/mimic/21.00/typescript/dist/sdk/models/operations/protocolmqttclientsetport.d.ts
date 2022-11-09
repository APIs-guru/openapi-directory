import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolMqttClientSetPortPathParams extends SpeakeasyBase {
    agentNum: number;
    port: string;
}
export declare class ProtocolMqttClientSetPortRequest extends SpeakeasyBase {
    pathParams: ProtocolMqttClientSetPortPathParams;
}
export declare class ProtocolMqttClientSetPortResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolMqttClientSetPort200ApplicationJsonInt32Integers?: number[];
}
