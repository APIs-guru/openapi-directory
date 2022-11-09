import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolMqttClientSubscribeCardPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolMqttClientSubscribeCardRequest extends SpeakeasyBase {
    pathParams: ProtocolMqttClientSubscribeCardPathParams;
}
export declare class ProtocolMqttClientSubscribeCardResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolMqttClientSubscribeCard200ApplicationJsonInt32Integers?: number[];
}
