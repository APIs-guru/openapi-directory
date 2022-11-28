import { SpeakeasyBase } from "../../../internal/utils";
export declare class AgentStoreUnsetPathParams extends SpeakeasyBase {
    agentNum: number;
    var: string;
}
export declare class AgentStoreUnsetRequest extends SpeakeasyBase {
    pathParams: AgentStoreUnsetPathParams;
}
export declare class AgentStoreUnsetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    agentStoreUnset200ApplicationJsonString?: string;
}
