import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolIpmiSetTracePathParams extends SpeakeasyBase {
    agentNum: number;
    enableOrNot: string;
}
export declare class ProtocolIpmiSetTraceRequest extends SpeakeasyBase {
    pathParams: ProtocolIpmiSetTracePathParams;
}
export declare class ProtocolIpmiSetTraceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolIpmiSetTrace200ApplicationJsonString?: string;
}
