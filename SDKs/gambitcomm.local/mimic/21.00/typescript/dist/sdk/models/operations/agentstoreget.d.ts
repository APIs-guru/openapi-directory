import { SpeakeasyBase } from "../../../internal/utils";
export declare class AgentStoreGetPathParams extends SpeakeasyBase {
    agentNum: number;
    var: string;
}
export declare class AgentStoreGetRequest extends SpeakeasyBase {
    pathParams: AgentStoreGetPathParams;
}
export declare class AgentStoreGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    agentStoreGet200ApplicationJsonString?: string;
}
