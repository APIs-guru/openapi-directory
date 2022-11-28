import { SpeakeasyBase } from "../../../internal/utils";
export declare class AgentRemovePathParams extends SpeakeasyBase {
    agentNum: number;
}
export declare class AgentRemoveRequest extends SpeakeasyBase {
    pathParams: AgentRemovePathParams;
}
export declare class AgentRemoveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    agentRemove200ApplicationJsonString?: string;
}
