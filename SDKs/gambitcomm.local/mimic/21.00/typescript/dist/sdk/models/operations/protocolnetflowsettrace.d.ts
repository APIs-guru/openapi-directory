import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolNetflowSetTracePathParams extends SpeakeasyBase {
    agentNum: number;
    enableOrNot: string;
}
export declare class ProtocolNetflowSetTraceRequest extends SpeakeasyBase {
    pathParams: ProtocolNetflowSetTracePathParams;
}
export declare class ProtocolNetflowSetTraceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolNetflowSetTrace200ApplicationJsonString?: string;
}
