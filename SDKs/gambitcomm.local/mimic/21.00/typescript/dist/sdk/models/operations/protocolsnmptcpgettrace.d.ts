import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProtocolSnmptcpGetTracePathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolSnmptcpGetTraceRequest extends SpeakeasyBase {
    pathParams: ProtocolSnmptcpGetTracePathParams;
}
export declare class ProtocolSnmptcpGetTraceResponse extends SpeakeasyBase {
    configSnmptcp?: shared.ConfigSnmptcp;
    contentType: string;
    statusCode: number;
}
