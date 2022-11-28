import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolCoapSetTracePathParams extends SpeakeasyBase {
    agentNum: number;
    enableOrNot: string;
}
export declare class ProtocolCoapSetTraceRequest extends SpeakeasyBase {
    pathParams: ProtocolCoapSetTracePathParams;
}
export declare class ProtocolCoapSetTraceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolCoapSetTrace200ApplicationJsonString?: string;
}
