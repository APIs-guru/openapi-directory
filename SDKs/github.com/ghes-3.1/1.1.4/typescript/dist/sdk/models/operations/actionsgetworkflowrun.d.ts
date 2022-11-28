import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsGetWorkflowRunPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
    runId: number;
}
export declare class ActionsGetWorkflowRunRequest extends SpeakeasyBase {
    pathParams: ActionsGetWorkflowRunPathParams;
}
export declare class ActionsGetWorkflowRunResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    workflowRun?: shared.WorkflowRun;
}
