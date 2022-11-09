import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProtocolSyslogSendPathParams extends SpeakeasyBase {
    agentNum: number;
    pri: number;
}
export declare class ProtocolSyslogSendRequest extends SpeakeasyBase {
    pathParams: ProtocolSyslogSendPathParams;
    request: shared.SyslogMsg;
}
export declare class ProtocolSyslogSendResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSyslogSend200ApplicationJsonString?: string;
}
