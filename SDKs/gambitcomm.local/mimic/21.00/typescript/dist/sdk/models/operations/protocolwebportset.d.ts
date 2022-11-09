import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolWebPortSetPathParams extends SpeakeasyBase {
    agentNum: number;
    port: number;
    protocol: string;
    version: string;
}
export declare class ProtocolWebPortSetRequest extends SpeakeasyBase {
    pathParams: ProtocolWebPortSetPathParams;
}
export declare class ProtocolWebPortSetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolWebPortSet200ApplicationJsonString?: string;
}
