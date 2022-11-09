import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolMqttClientResubscribePathParams extends SpeakeasyBase {
    agentNum: number;
    subNum: number;
}
export declare class ProtocolMqttClientResubscribeRequest extends SpeakeasyBase {
    pathParams: ProtocolMqttClientResubscribePathParams;
}
export declare class ProtocolMqttClientResubscribeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolMqttClientResubscribe200ApplicationJsonString?: string;
}
