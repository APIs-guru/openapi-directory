import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolMqttClientSetWilltopicPathParams extends SpeakeasyBase {
    agentNum: number;
    topic: string;
}
export declare class ProtocolMqttClientSetWilltopicRequest extends SpeakeasyBase {
    pathParams: ProtocolMqttClientSetWilltopicPathParams;
}
export declare class ProtocolMqttClientSetWilltopicResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolMqttClientSetWilltopic200ApplicationJsonInt32Integers?: number[];
}
