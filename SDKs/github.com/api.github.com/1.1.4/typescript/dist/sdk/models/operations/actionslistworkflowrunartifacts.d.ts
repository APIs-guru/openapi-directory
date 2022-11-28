import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsListWorkflowRunArtifactsPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
    runId: number;
}
export declare class ActionsListWorkflowRunArtifactsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ActionsListWorkflowRunArtifacts200ApplicationJson extends SpeakeasyBase {
    artifacts: shared.Artifact[];
    totalCount: number;
}
export declare class ActionsListWorkflowRunArtifactsRequest extends SpeakeasyBase {
    pathParams: ActionsListWorkflowRunArtifactsPathParams;
    queryParams: ActionsListWorkflowRunArtifactsQueryParams;
}
export declare class ActionsListWorkflowRunArtifactsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    actionsListWorkflowRunArtifacts200ApplicationJsonObject?: ActionsListWorkflowRunArtifacts200ApplicationJson;
}
