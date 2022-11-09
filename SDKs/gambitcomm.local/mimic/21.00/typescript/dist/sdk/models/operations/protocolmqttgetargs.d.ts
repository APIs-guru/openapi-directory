import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolMqttGetArgsPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolMqttGetArgsRequest extends SpeakeasyBase {
    pathParams: ProtocolMqttGetArgsPathParams;
}
export declare class ProtocolMqttGetArgsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolMqttGetArgs200ApplicationJsonObject?: Map<string, any>;
}
