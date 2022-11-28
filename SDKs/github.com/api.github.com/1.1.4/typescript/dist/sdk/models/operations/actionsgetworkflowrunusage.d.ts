import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsGetWorkflowRunUsagePathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
    runId: number;
}
export declare class ActionsGetWorkflowRunUsageRequest extends SpeakeasyBase {
    pathParams: ActionsGetWorkflowRunUsagePathParams;
}
export declare class ActionsGetWorkflowRunUsageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    workflowRunUsage?: shared.WorkflowRunUsage;
}
