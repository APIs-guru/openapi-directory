import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolNetflowSetFileNamePathParams extends SpeakeasyBase {
    agentNum: number;
    fileName: string;
}
export declare class ProtocolNetflowSetFileNameRequest extends SpeakeasyBase {
    pathParams: ProtocolNetflowSetFileNamePathParams;
}
export declare class ProtocolNetflowSetFileNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolNetflowSetFileName200ApplicationJsonString?: string;
}
