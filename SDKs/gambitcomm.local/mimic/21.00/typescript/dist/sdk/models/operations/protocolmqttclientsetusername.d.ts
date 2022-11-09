import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolMqttClientSetUsernamePathParams extends SpeakeasyBase {
    agentNum: number;
    username: string;
}
export declare class ProtocolMqttClientSetUsernameRequest extends SpeakeasyBase {
    pathParams: ProtocolMqttClientSetUsernamePathParams;
}
export declare class ProtocolMqttClientSetUsernameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolMqttClientSetUsername200ApplicationJsonInt32Integers?: number[];
}
