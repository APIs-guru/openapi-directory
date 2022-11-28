import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolProxySetTracePathParams extends SpeakeasyBase {
    agentNum: number;
    enableOrNot: string;
}
export declare class ProtocolProxySetTraceRequest extends SpeakeasyBase {
    pathParams: ProtocolProxySetTracePathParams;
}
export declare class ProtocolProxySetTraceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolProxySetTrace200ApplicationJsonString?: string;
}
