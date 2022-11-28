import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolProxyPortRemovePathParams extends SpeakeasyBase {
    agentNum: number;
    port: number;
}
export declare class ProtocolProxyPortRemoveRequest extends SpeakeasyBase {
    pathParams: ProtocolProxyPortRemovePathParams;
}
export declare class ProtocolProxyPortRemoveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolProxyPortRemove200ApplicationJsonString?: string;
}
