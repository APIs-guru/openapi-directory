import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActionsDeleteWorkflowRunPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
    runId: number;
}
export declare class ActionsDeleteWorkflowRunRequest extends SpeakeasyBase {
    pathParams: ActionsDeleteWorkflowRunPathParams;
}
export declare class ActionsDeleteWorkflowRunResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
