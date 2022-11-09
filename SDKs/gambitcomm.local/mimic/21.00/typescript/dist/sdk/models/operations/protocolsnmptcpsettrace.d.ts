import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolSnmptcpSetTracePathParams extends SpeakeasyBase {
    agentNum: number;
    enableOrNot: string;
}
export declare class ProtocolSnmptcpSetTraceRequest extends SpeakeasyBase {
    pathParams: ProtocolSnmptcpSetTracePathParams;
}
export declare class ProtocolSnmptcpSetTraceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSnmptcpSetTrace200ApplicationJsonString?: string;
}
