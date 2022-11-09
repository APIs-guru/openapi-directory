import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolTodSetTracePathParams extends SpeakeasyBase {
    agentNum: number;
    enableOrNot: string;
}
export declare class ProtocolTodSetTraceRequest extends SpeakeasyBase {
    pathParams: ProtocolTodSetTracePathParams;
}
export declare class ProtocolTodSetTraceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolTodSetTrace200ApplicationJsonString?: string;
}
