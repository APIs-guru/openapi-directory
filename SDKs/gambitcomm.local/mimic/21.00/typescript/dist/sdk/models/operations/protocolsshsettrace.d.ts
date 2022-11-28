import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolSshSetTracePathParams extends SpeakeasyBase {
    agentNum: number;
    enableOrNot: string;
}
export declare class ProtocolSshSetTraceRequest extends SpeakeasyBase {
    pathParams: ProtocolSshSetTracePathParams;
}
export declare class ProtocolSshSetTraceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolSshSetTrace200ApplicationJsonString?: string;
}
