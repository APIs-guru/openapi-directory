import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolNetflowSetCollectorPathParams extends SpeakeasyBase {
    agentNum: number;
    collectorIp: string;
}
export declare class ProtocolNetflowSetCollectorRequest extends SpeakeasyBase {
    pathParams: ProtocolNetflowSetCollectorPathParams;
}
export declare class ProtocolNetflowSetCollectorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolNetflowSetCollector200ApplicationJsonString?: string;
}
