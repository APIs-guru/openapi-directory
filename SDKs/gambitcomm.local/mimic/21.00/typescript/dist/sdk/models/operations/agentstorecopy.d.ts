import { SpeakeasyBase } from "../../../internal/utils";
export declare class AgentStoreCopyPathParams extends SpeakeasyBase {
    agentNum: number;
    otherAgent: number;
}
export declare class AgentStoreCopyRequest extends SpeakeasyBase {
    pathParams: AgentStoreCopyPathParams;
}
export declare class AgentStoreCopyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    agentStoreCopy200ApplicationJsonString?: string;
}
