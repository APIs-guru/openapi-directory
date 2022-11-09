import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolSyslogSetConfigPathParams extends SpeakeasyBase {
    agentNum: number;
    argument: string;
    value: string;
}
export declare class ProtocolSyslogSetConfigRequest extends SpeakeasyBase {
    pathParams: ProtocolSyslogSetConfigPathParams;
}
export declare class ProtocolSyslogSetConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSyslogSetConfig200ApplicationJsonString?: string;
}
