import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolMqttClientRuntimeConnectPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolMqttClientRuntimeConnectRequest extends SpeakeasyBase {
    pathParams: ProtocolMqttClientRuntimeConnectPathParams;
}
export declare class ProtocolMqttClientRuntimeConnectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolMqttClientRuntimeConnect200ApplicationJsonStrings?: string[];
}
