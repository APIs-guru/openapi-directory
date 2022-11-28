import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolSyslogSetTracePathParams extends SpeakeasyBase {
    agentNum: number;
    enableOrNot: string;
}
export declare class ProtocolSyslogSetTraceRequest extends SpeakeasyBase {
    pathParams: ProtocolSyslogSetTracePathParams;
}
export declare class ProtocolSyslogSetTraceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSyslogSetTrace200ApplicationJsonString?: string;
}
