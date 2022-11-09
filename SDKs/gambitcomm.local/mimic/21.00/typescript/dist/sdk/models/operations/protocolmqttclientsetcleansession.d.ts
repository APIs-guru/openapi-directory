import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolMqttClientSetCleansessionPathParams extends SpeakeasyBase {
    agentNum: number;
    cleanOrNot: number;
}
export declare class ProtocolMqttClientSetCleansessionRequest extends SpeakeasyBase {
    pathParams: ProtocolMqttClientSetCleansessionPathParams;
}
export declare class ProtocolMqttClientSetCleansessionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolMqttClientSetCleansession200ApplicationJsonInt32Integers?: number[];
}
