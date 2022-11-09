import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProtocolSyslogGetTracePathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolSyslogGetTraceRequest extends SpeakeasyBase {
    pathParams: ProtocolSyslogGetTracePathParams;
}
export declare class ProtocolSyslogGetTraceResponse extends SpeakeasyBase {
    configSyslog?: shared.ConfigSyslog;
    contentType: string;
    statusCode: number;
}
