import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolWebPortStartPathParams extends SpeakeasyBase {
    agentNum: number;
    port: number;
}
export declare class ProtocolWebPortStartRequest extends SpeakeasyBase {
    pathParams: ProtocolWebPortStartPathParams;
}
export declare class ProtocolWebPortStartResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolWebPortStart200ApplicationJsonString?: string;
}
