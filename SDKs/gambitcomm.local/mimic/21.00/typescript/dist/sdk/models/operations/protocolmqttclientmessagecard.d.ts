import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolMqttClientMessageCardPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolMqttClientMessageCardRequest extends SpeakeasyBase {
    pathParams: ProtocolMqttClientMessageCardPathParams;
}
export declare class ProtocolMqttClientMessageCardResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolMqttClientMessageCard200ApplicationJsonInt32Integers?: number[];
}
