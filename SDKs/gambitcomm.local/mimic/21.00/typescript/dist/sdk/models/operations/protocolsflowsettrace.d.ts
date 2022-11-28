import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolSflowSetTracePathParams extends SpeakeasyBase {
    agentNum: number;
    enableOrNot: string;
}
export declare class ProtocolSflowSetTraceRequest extends SpeakeasyBase {
    pathParams: ProtocolSflowSetTracePathParams;
}
export declare class ProtocolSflowSetTraceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSflowSetTrace200ApplicationJsonString?: string;
}
