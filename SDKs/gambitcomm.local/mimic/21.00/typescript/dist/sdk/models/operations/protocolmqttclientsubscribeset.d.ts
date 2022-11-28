import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolMqttClientSubscribeSetPathParams extends SpeakeasyBase {
    agentNum: number;
    attr: string;
    subNum: number;
    value: string;
}
export declare class ProtocolMqttClientSubscribeSetRequest extends SpeakeasyBase {
    pathParams: ProtocolMqttClientSubscribeSetPathParams;
}
export declare class ProtocolMqttClientSubscribeSetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolMqttClientSubscribeSet200ApplicationJsonStrings?: string[];
}
