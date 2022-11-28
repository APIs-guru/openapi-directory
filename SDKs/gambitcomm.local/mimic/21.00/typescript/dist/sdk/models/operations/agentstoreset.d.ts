import { SpeakeasyBase } from "../../../internal/utils";
export declare class AgentStoreSetPathParams extends SpeakeasyBase {
    agentNum: number;
    persist: number;
    var: string;
}
export declare class AgentStoreSetRequest extends SpeakeasyBase {
    pathParams: AgentStoreSetPathParams;
    request?: string;
}
export declare class AgentStoreSetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    agentStoreSet200ApplicationJsonString?: string;
}
