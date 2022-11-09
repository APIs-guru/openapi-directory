import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolProxyPortStopPathParams extends SpeakeasyBase {
    agentNum: number;
    port: number;
}
export declare class ProtocolProxyPortStopRequest extends SpeakeasyBase {
    pathParams: ProtocolProxyPortStopPathParams;
}
export declare class ProtocolProxyPortStopResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolProxyPortStop200ApplicationJsonString?: string;
}
