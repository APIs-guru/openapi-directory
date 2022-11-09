import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolMqttClientSetPasswordPathParams extends SpeakeasyBase {
    agentNum: number;
    password: string;
}
export declare class ProtocolMqttClientSetPasswordRequest extends SpeakeasyBase {
    pathParams: ProtocolMqttClientSetPasswordPathParams;
}
export declare class ProtocolMqttClientSetPasswordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolMqttClientSetPassword200ApplicationJsonInt32Integers?: number[];
}
