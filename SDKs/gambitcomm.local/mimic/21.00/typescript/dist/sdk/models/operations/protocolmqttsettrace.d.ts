import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolMqttSetTracePathParams extends SpeakeasyBase {
    agentNum: number;
    enableOrNot: string;
}
export declare class ProtocolMqttSetTraceRequest extends SpeakeasyBase {
    pathParams: ProtocolMqttSetTracePathParams;
}
export declare class ProtocolMqttSetTraceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolMqttSetTrace200ApplicationJsonString?: string;
}
