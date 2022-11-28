import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoryPipelineScheduleExecutionsPathParams extends SpeakeasyBase {
    repoSlug: string;
    scheduleUuid: string;
    workspace: string;
}
export declare class GetRepositoryPipelineScheduleExecutionsRequest extends SpeakeasyBase {
    pathParams: GetRepositoryPipelineScheduleExecutionsPathParams;
}
export declare class GetRepositoryPipelineScheduleExecutionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedPipelineScheduleExecutions?: shared.PaginatedPipelineScheduleExecutions;
}
