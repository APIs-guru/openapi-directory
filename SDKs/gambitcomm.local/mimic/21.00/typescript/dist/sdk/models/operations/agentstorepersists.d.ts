import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class AgentStorePersistsPathParams extends SpeakeasyBase {
    agentNum: number;
    var: string;
}
export declare class AgentStorePersistsRequest extends SpeakeasyBase {
    pathParams: AgentStorePersistsPathParams;
}
export declare class AgentStorePersistsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    agentStorePersists200ApplicationJsonString?: string;
}
