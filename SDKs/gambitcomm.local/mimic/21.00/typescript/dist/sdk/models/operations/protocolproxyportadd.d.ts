import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolProxyPortAddPathParams extends SpeakeasyBase {
    agentNum: number;
    port: number;
    target: string;
    targetPort: number;
}
export declare class ProtocolProxyPortAddRequest extends SpeakeasyBase {
    pathParams: ProtocolProxyPortAddPathParams;
}
export declare class ProtocolProxyPortAddResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolProxyPortAdd200ApplicationJsonString?: string;
}
