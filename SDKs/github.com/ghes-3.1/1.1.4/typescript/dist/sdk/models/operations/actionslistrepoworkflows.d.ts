import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsListRepoWorkflowsPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ActionsListRepoWorkflowsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ActionsListRepoWorkflows200ApplicationJson extends SpeakeasyBase {
    totalCount: number;
    workflows: shared.Workflow[];
}
export declare class ActionsListRepoWorkflowsRequest extends SpeakeasyBase {
    pathParams: ActionsListRepoWorkflowsPathParams;
    queryParams: ActionsListRepoWorkflowsQueryParams;
}
export declare class ActionsListRepoWorkflowsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    actionsListRepoWorkflows200ApplicationJsonObject?: ActionsListRepoWorkflows200ApplicationJson;
}
