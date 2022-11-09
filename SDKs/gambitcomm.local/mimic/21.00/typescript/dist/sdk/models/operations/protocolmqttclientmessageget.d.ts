import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolMqttClientMessageGetPathParams extends SpeakeasyBase {
    agentNum: number;
    attr: string;
    msgNum: number;
}
export declare class ProtocolMqttClientMessageGetRequest extends SpeakeasyBase {
    pathParams: ProtocolMqttClientMessageGetPathParams;
}
export declare class ProtocolMqttClientMessageGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolMqttClientMessageGet200ApplicationJsonStrings?: string[];
}
