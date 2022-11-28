import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsListWorkflowRunsPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
    workflowId: any;
}
export declare class ActionsListWorkflowRunsQueryParams extends SpeakeasyBase {
    actor?: string;
    branch?: string;
    event?: string;
    page?: number;
    perPage?: number;
    status?: shared.WorkflowRunStatusEnum;
}
export declare class ActionsListWorkflowRuns200ApplicationJson extends SpeakeasyBase {
    totalCount: number;
    workflowRuns: shared.WorkflowRun[];
}
export declare class ActionsListWorkflowRunsRequest extends SpeakeasyBase {
    pathParams: ActionsListWorkflowRunsPathParams;
    queryParams: ActionsListWorkflowRunsQueryParams;
}
export declare class ActionsListWorkflowRunsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    actionsListWorkflowRuns200ApplicationJsonObject?: ActionsListWorkflowRuns200ApplicationJson;
}
