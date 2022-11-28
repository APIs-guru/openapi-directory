import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsListJobsForWorkflowRunPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
    runId: number;
}
export declare enum ActionsListJobsForWorkflowRunFilterEnum {
    Latest = "latest",
    All = "all"
}
export declare class ActionsListJobsForWorkflowRunQueryParams extends SpeakeasyBase {
    filter?: ActionsListJobsForWorkflowRunFilterEnum;
    page?: number;
    perPage?: number;
}
export declare class ActionsListJobsForWorkflowRun200ApplicationJson extends SpeakeasyBase {
    jobs: shared.Job[];
    totalCount: number;
}
export declare class ActionsListJobsForWorkflowRunRequest extends SpeakeasyBase {
    pathParams: ActionsListJobsForWorkflowRunPathParams;
    queryParams: ActionsListJobsForWorkflowRunQueryParams;
}
export declare class ActionsListJobsForWorkflowRunResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    actionsListJobsForWorkflowRun200ApplicationJsonObject?: ActionsListJobsForWorkflowRun200ApplicationJson;
}
