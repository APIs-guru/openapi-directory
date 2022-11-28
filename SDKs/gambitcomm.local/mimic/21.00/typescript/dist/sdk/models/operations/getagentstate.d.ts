import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAgentStatePathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class GetAgentStateRequest extends SpeakeasyBase {
    pathParams: GetAgentStatePathParams;
}
export declare class GetAgentStateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAgentState200ApplicationJsonInt32Integer?: number;
}
