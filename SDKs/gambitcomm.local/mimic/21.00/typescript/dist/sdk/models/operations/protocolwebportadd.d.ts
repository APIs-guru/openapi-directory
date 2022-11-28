import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProtocolWebPortAddPathParams extends SpeakeasyBase {
    agentNum: number;
    port: number;
}
export declare class ProtocolWebPortAddRequest extends SpeakeasyBase {
    pathParams: ProtocolWebPortAddPathParams;
}
export declare class ProtocolWebPortAddResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolWebPortAdd200ApplicationJsonString?: string;
}
