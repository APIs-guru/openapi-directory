import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolMqttClientRuntimeAbortPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolMqttClientRuntimeAbortRequest extends SpeakeasyBase {
    pathParams: ProtocolMqttClientRuntimeAbortPathParams;
}
export declare class ProtocolMqttClientRuntimeAbortResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolMqttClientRuntimeAbort200ApplicationJsonStrings?: string[];
}
