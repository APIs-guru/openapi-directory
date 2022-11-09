import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolSyslogGetAttrPathParams extends SpeakeasyBase {
    agentNum: number;
    attr: string;
}
export declare class ProtocolSyslogGetAttrRequest extends SpeakeasyBase {
    pathParams: ProtocolSyslogGetAttrPathParams;
}
export declare class ProtocolSyslogGetAttrResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSyslogGetAttr200ApplicationJsonString?: string;
}
