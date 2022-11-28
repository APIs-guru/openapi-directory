import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRepositoryPipelineSchedulePathParams extends SpeakeasyBase {
    repoSlug: string;
    scheduleUuid: string;
    workspace: string;
}
export declare class GetRepositoryPipelineScheduleRequest extends SpeakeasyBase {
    pathParams: GetRepositoryPipelineSchedulePathParams;
}
export declare class GetRepositoryPipelineScheduleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    pipelineSchedule?: Map<string, any>;
}
