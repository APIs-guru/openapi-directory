import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class AgentStoreListPathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class AgentStoreListRequest extends SpeakeasyBase {
    pathParams: AgentStoreListPathParams;
}
export declare class AgentStoreListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    agentStoreList200ApplicationJsonStrings?: string[];
}
