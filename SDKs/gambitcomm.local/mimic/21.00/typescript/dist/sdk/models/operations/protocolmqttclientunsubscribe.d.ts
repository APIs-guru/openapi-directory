import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolMqttClientUnsubscribePathParams extends SpeakeasyBase {
    agentNum: number;
    subNum: number;
}
export declare class ProtocolMqttClientUnsubscribeRequest extends SpeakeasyBase {
    pathParams: ProtocolMqttClientUnsubscribePathParams;
}
export declare class ProtocolMqttClientUnsubscribeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolMqttClientUnsubscribe200ApplicationJsonString?: string;
}
