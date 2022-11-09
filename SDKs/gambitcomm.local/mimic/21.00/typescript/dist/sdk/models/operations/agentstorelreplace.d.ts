import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class AgentStoreLreplacePathParams extends SpeakeasyBase {
    agentNum: number;
    index: number;
    var: string;
}
export declare class AgentStoreLreplaceRequest extends SpeakeasyBase {
    pathParams: AgentStoreLreplacePathParams;
    request?: string;
}
export declare class AgentStoreLreplaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    agentStoreLreplace200ApplicationJsonString?: string;
}
