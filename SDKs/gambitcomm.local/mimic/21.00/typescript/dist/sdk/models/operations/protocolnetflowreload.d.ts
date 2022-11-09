import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolNetflowReloadPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolNetflowReloadRequest extends SpeakeasyBase {
    pathParams: ProtocolNetflowReloadPathParams;
}
export declare class ProtocolNetflowReloadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolNetflowReload200ApplicationJsonString?: string;
}
