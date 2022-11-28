import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActionsCancelWorkflowRunPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
    runId: number;
}
export declare class ActionsCancelWorkflowRunRequest extends SpeakeasyBase {
    pathParams: ActionsCancelWorkflowRunPathParams;
}
export declare class ActionsCancelWorkflowRunResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    actionsCancelWorkflowRun202ApplicationJsonObject?: Map<string, any>;
}
