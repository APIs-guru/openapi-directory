import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoryPipelineSchedulesPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoryPipelineSchedulesRequest extends SpeakeasyBase {
    pathParams: GetRepositoryPipelineSchedulesPathParams;
}
export declare class GetRepositoryPipelineSchedulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedPipelineSchedules?: shared.PaginatedPipelineSchedules;
}
