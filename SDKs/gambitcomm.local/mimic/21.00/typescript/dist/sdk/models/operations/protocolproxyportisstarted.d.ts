import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolProxyPortIsstartedPathParams extends SpeakeasyBase {
    agentNum: number;
    port: number;
}
export declare class ProtocolProxyPortIsstartedRequest extends SpeakeasyBase {
    pathParams: ProtocolProxyPortIsstartedPathParams;
}
export declare class ProtocolProxyPortIsstartedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolProxyPortIsstarted200ApplicationJsonString?: string;
}
