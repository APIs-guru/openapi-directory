import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolMqttClientMessageSetPathParams extends SpeakeasyBase {
    agentNum: number;
    attr: string;
    msgNum: number;
    value: string;
}
export declare class ProtocolMqttClientMessageSetRequest extends SpeakeasyBase {
    pathParams: ProtocolMqttClientMessageSetPathParams;
}
export declare class ProtocolMqttClientMessageSetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolMqttClientMessageSet200ApplicationJsonStrings?: string[];
}
