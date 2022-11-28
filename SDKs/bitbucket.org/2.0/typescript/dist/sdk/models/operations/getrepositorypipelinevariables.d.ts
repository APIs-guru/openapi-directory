import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoryPipelineVariablesPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoryPipelineVariablesRequest extends SpeakeasyBase {
    pathParams: GetRepositoryPipelineVariablesPathParams;
}
export declare class GetRepositoryPipelineVariablesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    paginatedPipelineVariables?: shared.PaginatedPipelineVariables;
}
