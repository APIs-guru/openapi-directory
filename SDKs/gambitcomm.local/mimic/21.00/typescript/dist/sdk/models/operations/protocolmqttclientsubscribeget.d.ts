import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolMqttClientSubscribeGetPathParams extends SpeakeasyBase {
    agentNum: number;
    attr: string;
    subNum: number;
}
export declare class ProtocolMqttClientSubscribeGetRequest extends SpeakeasyBase {
    pathParams: ProtocolMqttClientSubscribeGetPathParams;
}
export declare class ProtocolMqttClientSubscribeGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolMqttClientSubscribeGet200ApplicationJsonStrings?: string[];
}
