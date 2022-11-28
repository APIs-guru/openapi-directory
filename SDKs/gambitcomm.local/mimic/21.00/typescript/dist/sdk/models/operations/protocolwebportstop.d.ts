import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolWebPortStopPathParams extends SpeakeasyBase {
    agentNum: number;
    port: number;
}
export declare class ProtocolWebPortStopRequest extends SpeakeasyBase {
    pathParams: ProtocolWebPortStopPathParams;
}
export declare class ProtocolWebPortStopResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolWebPortStop200ApplicationJsonString?: string;
}
