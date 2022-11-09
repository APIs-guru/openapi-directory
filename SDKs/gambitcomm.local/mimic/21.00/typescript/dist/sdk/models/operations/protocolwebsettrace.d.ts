import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolWebSetTracePathParams extends SpeakeasyBase {
    agentNum: number;
    enableOrNot: string;
}
export declare class ProtocolWebSetTraceRequest extends SpeakeasyBase {
    pathParams: ProtocolWebSetTracePathParams;
}
export declare class ProtocolWebSetTraceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolWebSetTrace200ApplicationJsonString?: string;
}
