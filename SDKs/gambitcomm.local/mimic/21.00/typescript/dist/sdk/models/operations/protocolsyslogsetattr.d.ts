import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolSyslogSetAttrPathParams extends SpeakeasyBase {
    agentNum: number;
    attr: string;
    value: string;
}
export declare class ProtocolSyslogSetAttrRequest extends SpeakeasyBase {
    pathParams: ProtocolSyslogSetAttrPathParams;
}
export declare class ProtocolSyslogSetAttrResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSyslogSetAttr200ApplicationJsonString?: string;
}
