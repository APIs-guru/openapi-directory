import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolDhcpSetTracePathParams extends SpeakeasyBase {
    agentNum: number;
    enableOrNot: string;
}
export declare class ProtocolDhcpSetTraceRequest extends SpeakeasyBase {
    pathParams: ProtocolDhcpSetTracePathParams;
}
export declare class ProtocolDhcpSetTraceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolDhcpSetTrace200ApplicationJsonString?: string;
}
