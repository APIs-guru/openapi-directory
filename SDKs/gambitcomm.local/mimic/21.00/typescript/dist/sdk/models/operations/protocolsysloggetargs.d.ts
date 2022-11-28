import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolSyslogGetArgsPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolSyslogGetArgsRequest extends SpeakeasyBase {
    pathParams: ProtocolSyslogGetArgsPathParams;
}
export declare class ProtocolSyslogGetArgsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSyslogGetArgs200ApplicationJsonObject?: Map<string, any>;
}
