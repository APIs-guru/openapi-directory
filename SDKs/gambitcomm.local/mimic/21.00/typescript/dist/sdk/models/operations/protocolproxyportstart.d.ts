import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolProxyPortStartPathParams extends SpeakeasyBase {
    agentNum: number;
    port: number;
}
export declare class ProtocolProxyPortStartRequest extends SpeakeasyBase {
    pathParams: ProtocolProxyPortStartPathParams;
}
export declare class ProtocolProxyPortStartResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolProxyPortStart200ApplicationJsonString?: string;
}
