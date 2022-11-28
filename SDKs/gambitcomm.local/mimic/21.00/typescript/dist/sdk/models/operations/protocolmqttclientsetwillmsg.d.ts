import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolMqttClientSetWillmsgPathParams extends SpeakeasyBase {
    agentNum: number;
    msg: string;
}
export declare class ProtocolMqttClientSetWillmsgRequest extends SpeakeasyBase {
    pathParams: ProtocolMqttClientSetWillmsgPathParams;
}
export declare class ProtocolMqttClientSetWillmsgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolMqttClientSetWillmsg200ApplicationJsonInt32Integers?: number[];
}
