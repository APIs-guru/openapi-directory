import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProtocolDhcpGetTracePathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class ProtocolDhcpGetTraceRequest extends SpeakeasyBase {
    pathParams: ProtocolDhcpGetTracePathParams;
}
export declare class ProtocolDhcpGetTraceResponse extends SpeakeasyBase {
    configDhcp?: shared.ConfigDhcp;
    contentType: string;
    statusCode: number;
}
