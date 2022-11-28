import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolMqttSetConfigPathParams extends SpeakeasyBase {
    agentNum: number;
    argument: string;
    value: string;
}
export declare class ProtocolMqttSetConfigRequest extends SpeakeasyBase {
    pathParams: ProtocolMqttSetConfigPathParams;
}
export declare class ProtocolMqttSetConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolMqttSetConfig200ApplicationJsonString?: string;
}
