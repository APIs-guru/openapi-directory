import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProtocolSyslogGetConfigPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolSyslogGetConfigRequest extends SpeakeasyBase {
    pathParams: ProtocolSyslogGetConfigPathParams;
}
export declare class ProtocolSyslogGetConfigResponse extends SpeakeasyBase {
    configSyslog?: shared.ConfigSyslog;
    contentType: string;
    statusCode: number;
}
