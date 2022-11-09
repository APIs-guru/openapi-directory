import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProtocolWebPortRemovePathParams extends SpeakeasyBase {
    agentNum: number;
    port: number;
}
export declare class ProtocolWebPortRemoveRequest extends SpeakeasyBase {
    pathParams: ProtocolWebPortRemovePathParams;
}
export declare class ProtocolWebPortRemoveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protocolWebPortRemove200ApplicationJsonString?: string;
}
