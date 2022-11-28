import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsListWorkflowRunsForRepoPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ActionsListWorkflowRunsForRepoQueryParams extends SpeakeasyBase {
    actor?: string;
    branch?: string;
    event?: string;
    page?: number;
    perPage?: number;
    status?: shared.WorkflowRunStatusEnum;
}
export declare class ActionsListWorkflowRunsForRepo200ApplicationJson extends SpeakeasyBase {
    totalCount: number;
    workflowRuns: shared.WorkflowRun[];
}
export declare class ActionsListWorkflowRunsForRepoRequest extends SpeakeasyBase {
    pathParams: ActionsListWorkflowRunsForRepoPathParams;
    queryParams: ActionsListWorkflowRunsForRepoQueryParams;
}
export declare class ActionsListWorkflowRunsForRepoResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    actionsListWorkflowRunsForRepo200ApplicationJsonObject?: ActionsListWorkflowRunsForRepo200ApplicationJson;
}
