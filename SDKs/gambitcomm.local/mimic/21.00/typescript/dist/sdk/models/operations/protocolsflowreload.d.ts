import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolSflowReloadPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolSflowReloadRequest extends SpeakeasyBase {
    pathParams: ProtocolSflowReloadPathParams;
}
export declare class ProtocolSflowReloadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSflowReload200ApplicationJsonString?: string;
}
