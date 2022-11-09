import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolWebPortExistsPathParams extends SpeakeasyBase {
    agentNum: number;
    port: number;
}
export declare class ProtocolWebPortExistsRequest extends SpeakeasyBase {
    pathParams: ProtocolWebPortExistsPathParams;
}
export declare class ProtocolWebPortExistsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolWebPortExists200ApplicationJsonStrings?: string[];
}
