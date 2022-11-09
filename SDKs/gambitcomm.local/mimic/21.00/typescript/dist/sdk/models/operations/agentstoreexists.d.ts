import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class AgentStoreExistsPathParams extends SpeakeasyBase {
    agentNum: number;
    var: string;
}
export declare class AgentStoreExistsRequest extends SpeakeasyBase {
    pathParams: AgentStoreExistsPathParams;
}
export declare class AgentStoreExistsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    agentStoreExists200ApplicationJsonString?: string;
}
