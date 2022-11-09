import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolTelnetSetTracePathParams extends SpeakeasyBase {
    agentNum: number;
    enableOrNot: string;
}
export declare class ProtocolTelnetSetTraceRequest extends SpeakeasyBase {
    pathParams: ProtocolTelnetSetTracePathParams;
}
export declare class ProtocolTelnetSetTraceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolTelnetSetTrace200ApplicationJsonString?: string;
}
