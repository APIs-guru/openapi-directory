import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolMqttClientRuntimeDisconnectPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolMqttClientRuntimeDisconnectRequest extends SpeakeasyBase {
    pathParams: ProtocolMqttClientRuntimeDisconnectPathParams;
}
export declare class ProtocolMqttClientRuntimeDisconnectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolMqttClientRuntimeDisconnect200ApplicationJsonStrings?: string[];
}
